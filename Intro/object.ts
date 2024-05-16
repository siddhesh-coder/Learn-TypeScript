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
    ref_Id: 1287563,
    batch: "M",
    address: "Dubai"
}

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
