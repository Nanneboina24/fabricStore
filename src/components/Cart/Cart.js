import { Avatar, Box, Button, IconButton, Paper, TextField, Typography, styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { delCartAll, delCartItem, getCart, updateCart } from '../../Data/MockData';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Empty from '../Empty/Empty';
import Digital from '../../Data/Digital';

// Styled Components
const CustomBox = styled(Box)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",

  height: "calc(100vh - 64px)",
  width: "100vw",//calc(100vw - 200px)",
  overflow: "auto",
})

const CustomTableBox = styled(Box)({
  overflow: "auto",
})

const CustomBoxCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

}))

const Cart = ({ setcartLength }) => {
  //*states
  const [rows, setrows] = useState([]);
  const [user, setuser] = useState({});
  const navigate = useNavigate();

  const columns = [
    { field: 'sno', headerName: 'S.NO', width: 170 },
    {
      field: 'url', headerName: 'Image', width: 170,
      renderCell: (params) => (
        <Avatar alt="Image" src={params.row.url} />
      ),
    },
    { field: 'name', headerName: 'Name', width: 170 },
    {
      field: 'price',
      headerName: 'Price',
      width: 170,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 170,
      renderCell: (params) => (
        <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={params.row.quantity}
          size="small"
          variant="standard"
          sx={{
            width: "50%",
          }}
          onChange={(e) => handleCartQty(params.row, e.target.value)}
        />
      )
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 170,
      renderCell: (params) => (
        params.row.price * params.row.quantity
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 170,
      renderCell: (params) => (
        <IconButton color="default" size="large" onClick={() => handleCartDel(params.row)}>
          <Delete />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    const fetchRowsData = async () => {
      try {

        //*storage
        const user = JSON.parse(localStorage?.getItem("user"));
        setuser(user);

        let data = await getCart(user.id);
        data = data.map((item, index) => ({
          ...item,
          sno: index + 1,
        }));
        console.log("cart rows",data)
        setrows(data);
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    };

    fetchRowsData();
  }, []); // initial only it renders

  const handleCheckout = async () => {
    console.log("checkout", rows);
    navigate("/home/checkout?displayStatus=false")
  }

  const getTotal = () => {
    return rows.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  const handleCartQty = async (row, quantity) => {
    console.log("cart qty", row, quantity);

    if (quantity) {
      row = {
        ...row,
        quantity: quantity
      };

      let data = await updateCart(user.id, row);
      data = data.map((item, index) => ({
        ...item,
        sno: index + 1,
      }));
      console.log("cart update",data)
      setrows(data);
    }

  }

  const handleCartDel = async (row) => {
    console.log("cart del", row, user);
    let data = await delCartItem(user.id, row);
    setcartLength(data.length)

    data = data.map((item, index) => ({
      ...item,
      sno: index + 1,
    }));
    console.log("cart delete", data);
    setrows(data);

  }

  const handleCartDelAll = async () => {
    let data = await delCartAll(user.id);
    setcartLength(0);
    setrows(data);
  }

  return (
    <CustomBox>
      {
        rows.length === 0 ?
          (
            <CustomBoxCenter>
              <Empty msg={"Cart Empty"} src={Digital.Content_Empty} />
            </CustomBoxCenter>
          ) :
          (
            <>
              <Box sx=
                {{
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Box>
                  <Typography variant='h6'>Shopping Cart</Typography>
                </Box>
                <Box>
                  <IconButton color="error" size="large" onClick={handleCartDelAll}>
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
              <CustomTableBox>
                <Paper elevation={4} >
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.sno} //default identifier is id and sno is now custome identifier
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10, 15, 20, 25]}
                  />
                </Paper>
              </CustomTableBox>
              <Box sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Box sx={{ pr: 1 }}>
                  <Button variant="contained" onClick={handleCheckout}>
                    Checkout
                  </Button>
                </Box>
                <Box>
                  <Typography variant='h6'>${getTotal()}</Typography>
                </Box>
              </Box>
            </>
          )
      }
    </CustomBox>
  )
}

export default Cart