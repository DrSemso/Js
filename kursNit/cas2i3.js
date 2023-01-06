class User {
  constructor(name, lName, yearOfBirth) {
    this.name = name;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.age = this.calculateAge(this.yearOfBirth);
  }

  calculateAge(yearOfBirth) {
    return 2022 - yearOfBirth;
  }
}

class AdditionalInfo extends User {
  statesArr = [
    {
      state: "USA",
      cId: "+1",
    },
    {
      state: "UK",
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

  // street, city, state, phone number
  constructor(street, city, state, phoneNumber) {
    super(newUser.name, newUser.lName, newUser.yearOfBirth, newUser.age);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.AutoNum(phoneNumber, state);
  }

  AutoNum(phoneNumber, state) {
    if (phoneNumber[0] === "0") {
      let num = phoneNumber.slice(1);
      const stateObj = this.statesArr.find((s) => s.state === state);
      this.phoneNumber = stateObj.cId + num;
    }
  }
  metodaIspisPodataka() {
    this.beautify = {
      name: this.name,
      lname: this.lName,
      yearofBirth: this.yearOfBirth,
      age: this.age,
      city: this.city,
      state: this.state,
      phone: this.phoneNumber,
      street: this.street,
    };
    console.log(this.beautify);
  }
}

const newUser = new User("Fatih", "Lukarcanin", 2004);

// console.log(newUser);

const additional = new AdditionalInfo(
  "Hercegovacka 64",
  "Novi Pazar",
  "Serbia",
  "0628100663"
);

// console.log(additional);

additional.metodaIspisPodataka();
