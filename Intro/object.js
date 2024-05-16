"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = function (user) {
    return user;
};
console.log(obj({ name: "Siddhesh B", phone: 123456789 }));
var user = {
    name: "Siddhesh B",
    ref_Id: 4566532,
    batch: "M",
    address: "Dubai"
};
var user2 = {
    name: "Siddhesh B",
    ref_Id: [1, 2, 3, 4, 5],
    batch: "M",
    address: "Dubai"
};
user2.ref_Id.push(22);
console.log(user2);
