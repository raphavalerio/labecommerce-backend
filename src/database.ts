import {Tuser, Tproduct, Tpurchase} from "./types"

export const users: Tuser[] = [{
    id: "1",
    email: "primeiro@email.com",
    password: "123456"
},
{
    id: "2",
    email: "segundo@email.com",
    password: "123456"
}]

export const products: Tproduct[] = [{
    id: "1",
    name: "Laranja",
    price: 3,
    category: "Fruta"
}, {
    id: "2",
    name: "Batata",
    price: 5,
    category: "Legumes"
}]

export const purchases: Tpurchase[] = [{
    userid: "1",
    productid: "1",
    quantity: 6,
    totalPrice: products[0].price * 6
}, {
    userid: "2",
    productid: '2',
    quantity: 4,
    totalPrice: products[1].price * 4
}]