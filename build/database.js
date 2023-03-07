"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [{
        id: "1",
        email: "primeiro@email.com",
        password: "123456"
    },
    {
        id: "2",
        email: "segundo@email.com",
        password: "123456"
    }];
exports.products = [{
        id: "1",
        name: "Laranja",
        price: 3,
        category: "Fruta"
    }, {
        id: "2",
        name: "Batata",
        price: 5,
        category: "Legumes"
    }];
exports.purchases = [{
        userid: "1",
        productid: "1",
        quantity: 6,
        totalPrice: exports.products[0].price * 6
    }, {
        userid: "2",
        productid: '2',
        quantity: 4,
        totalPrice: exports.products[1].price * 4
    }];
//# sourceMappingURL=database.js.map