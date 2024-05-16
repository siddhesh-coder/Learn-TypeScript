type myObject = { //this is type aliases
  //Instead of type we can use interface also more precise
  name: string;
  phone: number;
};

const obj = (user: myObject): myObject => {
  return user;
};

console.log(obj({ name: "Siddhesh B", phone: 123456789 }));

type userType = {
    name: string,
    readonly ref_Id: number, //cannot change its readonly
    batch: string,
    address: string
    panCard_No?: string //optional
}

const user: userType = {
    name: "Siddhesh B",
    ref_Id: 4566532,
    batch: "M",
    address: "Dubai"
}

//Scenario when ref_Id will be array and has readonly(keyword), if id would be array, can we push values to array in case READONLY, and the answer is YES.

type userType2 = {
    name: string,
    readonly ref_Id: number[], //cannot change its readonly
    batch: string,
    address: string
    panCard_No?: string //optional
}

const user2: userType2 = {
    name: "Siddhesh B",
    ref_Id: [1,2,3,4,5],
    batch: "M",
    address: "Dubai"
}

user2.ref_Id.push(22);
console.log(user2);

type CardNumber = {
    cardNumber: number,
}

type CardName = {
    cardName: string,
}

type CardDetails = CardNumber & CardName & { //here & for combining
    cvv: number
}

export {}
