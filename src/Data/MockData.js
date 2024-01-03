//*login
export const credentials = [
    {
        id: "user1",
        username: "sumanth",
        password: "12345",
        type: "user",
        logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
    },
    {
        id: "user2",
        username: "nanneboina",
        password: "12345",
        type: "user",
        logo: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
    },
    {
        id: "admin1",
        username: "admin",
        password: "12345",
        type: "admin",
        logo: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
    }
]

//*sidebar
export const store = {
    Mens: [
        {
            name: "T-Shirts",
            logo: "https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg"
        },
        {
            name: "Shirts",
            logo: "https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg"
        },
        {
            name: "Sweaters",
            logo: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
        },
        {
            name: "Jackets",
            logo: "https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg"
        },
        {
            name: "Suits",
            logo: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
        },
        {
            name: "Pants",
            logo: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
        }
    ],
    Womens: [
        {
            name: "Dresses",
            logo: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg"
        },
        {
            name: "Bottoms",
            logo: "https://images.pexels.com/photos/6421668/pexels-photo-6421668.jpeg"
        },
        {
            name: "Jackets",
            logo: "https://images.pexels.com/photos/10669646/pexels-photo-10669646.jpeg"
        },
        {
            name: "Streetwear",
            logo: "https://images.pexels.com/photos/13007821/pexels-photo-13007821.jpeg"
        },
        {
            name: "Ethnic",
            logo: "https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg"
        },
        {
            name: "Retro",
            logo: "https://images.pexels.com/photos/17250951/pexels-photo-17250951/free-photo-of-young-woman-in-a-shirt-and-sunglasses-on-a-city-street.jpeg"
        }
    ]
}

//*content
export const Mens = {
    "T-Shirts": [
        {
            id: 1,
            name: "Crewneck",
            url: "https://images.pexels.com/photos/4670646/pexels-photo-4670646.jpeg",
            price: "500",
        },
        {
            id: 2,
            name: "Crewneck",
            url: "https://images.pexels.com/photos/4584548/pexels-photo-4584548.jpeg",
            price: "600"
        },
        {
            id: 3,
            name: "V-neck",
            url: "https://images.pexels.com/photos/6298345/pexels-photo-6298345.jpeg",
            price: "800"
        },
        {
            id: 4,
            name: "Henley",
            url: "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg",
            price: "1150"
        },
        {
            id: 5,
            name: "Henley",
            url: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
            price: "1050"
        }
    ],
    Shirts: [
        {
            id: 1,
            name: "Polo",
            url: "https://images.pexels.com/photos/5524449/pexels-photo-5524449.jpeg",
            price: "200"
        },
        {
            id: 2,
            name: "Flannel",
            url: "https://images.pexels.com/photos/13316724/pexels-photo-13316724.jpeg",
            price: "400"
        }
    ],
    Sweaters: [],
    Jackets: [],
    Suits: [],
    Pants: [
        {
            id: 1,
            name: "Cargo",
            url: "https://images.pexels.com/photos/19545685/pexels-photo-19545685/free-photo-of-man-in-green-hoodie-and-pants-sitting-on-cliff.jpeg",
            price: "1500"
        },
    ]
}

export const Womens = {
    Dresses: [
        {
            id: 1,
            name: "Sundresses",
            url: "https://images.pexels.com/photos/4969979/pexels-photo-4969979.jpeg",
            price: "1400"
        },
        {
            id: 2,
            name: "Cocktail",
            url: "https://images.pexels.com/photos/9377634/pexels-photo-9377634.jpeg",
            price: "900"
        },
        {
            id: 3,
            name: "Wrap",
            url: "https://images.pexels.com/photos/17889697/pexels-photo-17889697/free-photo-of-woman-in-wrap-dress-covering-face-with-sunflower.jpeg",
            price: "2000"
        }

    ],
    Bottoms: [
        {
            id: 1,
            name: "Jeans",
            url: "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg",
            price: "500"
        },
    ],
    Jackets: [],
    Streetwear: [],
    Ethnic: [],
    Retro: []
}

//*cart
export const cart = {
    user1: [
        {
            id: 1,
            name: "Crewneck",
            url: "https://images.pexels.com/photos/4670646/pexels-photo-4670646.jpeg",
            price: "500",
            quantity: 2
        },
        {
            id: 2,
            name: "Crewneck",
            url: "https://images.pexels.com/photos/4584548/pexels-photo-4584548.jpeg",
            price: "600",
            quantity: 4
        },
        {
            id: 2,
            name: "Flannel",
            url: "https://images.pexels.com/photos/13316724/pexels-photo-13316724.jpeg",
            price: "400",
            quantity: 1
        },
        {
            id: 3,
            name: "Wrap",
            url: "https://images.pexels.com/photos/17889697/pexels-photo-17889697/free-photo-of-woman-in-wrap-dress-covering-face-with-sunflower.jpeg",
            price: "2000",
            quantity: 3
        },



    ],
    user2: []
}


//*API's Integration
export const getCredentials = async (username, password) => {
    const user = credentials.find((u) => u.username === username && u.password === password);
    return user;
}

export const getSidebar = async () => {
    return store;
}

export const getContent = async (object) => {
    if (object.category === "Mens") {
        for (let item of Object.keys(Mens)) {
            if (item === object.item) {
                return Mens[item];
            }
        }

    }
    else if (object.category === "Womens") {
        for (let item of Object.keys(Womens)) {
            if (item === object.item) {
                return Womens[item];
            }
        }
    }
    else {
        return []
    }
}

export const getCart = async (id) => {
    return cart[id];
}

export const getCartLength = async (id) => {
    return cart[id].length;
}

export const postCart = async (id, item) => {
    let cartData = cart[id];
    cartData.push(item);
    cart[id] = cartData;
    return cart[id];
}

export const updateCart = async (id, item) => {
    const newCart = [...cart[id]];
    let index = newCart.findIndex((f) => f.id == item.id && f.name == item.name);
    newCart[index] = item;
    cart[id] = [...newCart]
    return cart[id];
}

export const delCartAll = async (id) => {
    cart[id] = [];
    return cart[id];
}

export const delCartItem = async (id, item) => {
    let cardData = cart[id];
    let finalData = cardData.filter((f) => f.id !== item.id || f.name !== item.name);
    cart[id] = finalData;
    return cart[id];
}