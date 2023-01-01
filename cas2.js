// Node.js : runtime koji vrsi egzekuciju i kompajlovanje javascript koda
// Node ima mnosttvo svojih modula, napoznatiji su fs(fileSystem ) i http modul

// File for class subject

// class Car {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   fullname() {
//     return console.log(`${this.name} ${this.type}`);
//   }
// }

// const newCar = new Car("Audi", "Limo");

// console.log(newCar);

// newCar.fullname();

// class Person {
//   constructor(name, lname) {
//     this.name = name;
//     this.lname = lname;
//   }

//   fullname() {
//     return console.log(`${this.name} ${this.lname}`);
//   }
// }

// const newPerson = new Person("Fatih", "Lukarcanin");

// console.log(newPerson);

// newPerson.fullname();

// Create a new class User with data like namme, lName, yearofVirth;

class User {
  currentYear = 2022;
  constructor(name, lname, yearofBirth) {
    this.name = name;
    this.lname = lname;
    this.yearofBirth = yearofBirth;
    this.age = this.numberofAge(yearofBirth);
  }

  fullname() {
    return console.log(`${this.name} ${this.lname}`);
  }

  numberofAge() {
    return this.currentYear - this.yearofBirth;
  }
}

statesArr = [
  {
    state: "USA",
    cId: "+1",
  },
  {
    state: "Uk",
    cId: "+44",
  },
  {
    state: "Mexico",
    cId: "+52",
  },
  {
    state: "India",
    cId: "+91",
  },
  {
    state: "China",
    cId: "+86",
  },
  {
    state: "Serbia",
    cId: "+381",
  },
];

class AdditionalInfo extends User {
  //street, city, state, phone number

  constructor(name, lname, yearofBirth, street, city, state, phoneNumber) {
    super(name, lname, yearofBirth);
    this.street = street;
    this.city = city;
    this.state = state;
    this.autoNum(phoneNumber, state);
  }

  autoNum(phoneNumber, state) {
    if (phoneNumber[0] === "0") {
      let num = phoneNumber.slice(1);
      const stateObj = statesArr.find((s) => s.state === state);
      this.phoneNumber = stateObj.cId + num;
    }
  }
}

const newUserPlus = new AdditionalInfo(
  "Fatih",
  "Lukarcanin",
  2004,
  "hercegovacka",
  "Novi Pazar",
  "Serbia",
  "0628100663"
);
console.log(newUserPlus);
