import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getContent, postCart } from '../../Data/MockData';
import { Box, Grid, styled } from '@mui/material';
import Item from './Item';
import Empty from '../Empty/Empty';
import Digital from "../../Data/Digital";

// Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  height: "calc(100vh - 64px)",
  width: "calc(100vw - 100px)",
  [theme.breakpoints.up("sm")]: {
    width: "calc(100vw - 200px)",
  },
  overflow: "auto",
}))

const CustomBoxCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

}))


const Content = ({ setcartLength }) => {
  //*states
  const [queryParamsObject, setqueryParamsObject] = useState({});
  const [contentData, setcontentData] = useState([]);
  const [user, setuser] = useState({});

  const location = useLocation();
  useEffect(() => {
    console.log("queryparams");
    const queryParams = new URLSearchParams(location.search);
    const paramsObject = {};

    //*storage
    const user = JSON.parse(localStorage?.getItem("user"));
    setuser(user);

    // Access specific query parameters
    // const paramValue = queryParams.get('category');
    queryParams.forEach((value, key) => {
      paramsObject[key] = value;
    });

    setqueryParamsObject(paramsObject);
  }, [location.search]);


  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const data = await getContent(queryParamsObject);
        console.log("content", data);
        setcontentData(data);
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    };

    fetchContentData();
  }, [queryParamsObject]); // runs when ever change happend in queryParamsObject


  const handleAddCart = async (item) => {
    item = {
      ...item,
      quantity: item.quantity ? item.quantity : 1
    }
    console.log("cart add", item, user.id);

    await postCart(user.id, item);
    setcartLength((prev) => prev + 1)
  }

  return (
    <CustomBox>
      {
        contentData.length == 0 ?
          (
            <CustomBoxCenter>
              <Empty msg={"Data Empty"} src={Digital.Content_Empty} />
            </CustomBoxCenter>
          ) :
          (
            <Grid container rowSpacing={3} columnSpacing={3}>
              {
                contentData.map((card) => {
                  return (
                    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                      <Item card={card} handleAddCart={handleAddCart} />
                    </Grid>
                  )
                })
              }
            </Grid>
          )
      }
    </CustomBox >
  )
}

export default Content

/* 
xs mobile
sm tablet
md laptop 1024
lg laptop 1440
*/