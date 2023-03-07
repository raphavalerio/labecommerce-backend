export type Tuser = {
    id: string,
    email: string,
    password: string
}

export type Tproduct = {
    id: string,
    name: string,
    price: number,
    category: string
}

export type Tpurchase = {
    userid: string,
    productid: string,
    quantity: number,
    totalPrice: number
}