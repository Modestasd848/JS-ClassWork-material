let doors = {
  color: 'brown',
  isOpen: false,
  open: function () {
    if (doors.isOpen === true) {
      return 'Doors are open';
    } else {
      doors.isOpen = true;
      return 'I am opening the door';
    }
  },
  close: function () {
    if (doors.isOpen === false) {
      return 'Doors are closed';
    } else {
      doors.isOpen = false;
      return 'I am closing the door';
    }
  },
};
// console.log(doors.close());
// console.log(doors.open());

const savingsAccount = {
  balance: 1000,
  interestRate: 1,
  deposit: function (amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  },

  withdraw: function (amount) {
    const verifyBalance = this.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      this.balance -= amount;
      return `Your witdraw ${amount} \nYour have ${this.balance} in your account left`;
    }
    if (verifyBalance < 0) {
      return `Ups you dont't gave $${amount} in your account left`;
    }
  },
  printAccountSummary: function () {
    console.log(
      `Welcome ! \nYour balance is currently ${this.balance} and your interest rate is ${this.interestRate}%`
    );
  },
};
// console.log(savingsAccount.withdraw(164));
// savingsAccount.printAccountSummary();

const facebookProfile = {
  name: 'Modestas',
  friendsAmount: 100,
  messages: ['hello', 'bye', 'world'],
  postMessage: function (message) {
    if (message && typeof message === 'string') {
      this.messages.push(message);
    }
  },
  deleteMessage: function (index) {
    if (!(index > this.messages.length - 1)) {
      this.messages[index] = undefined;
      this.messages = this.messages.filter((message) => message);
    }
  },
  addFriend: function () {
    this.friendsAmount++;
  },
  removeFriend: function () {
    this.friendsAmount--;
  },
};

// console.log(Object.assign(facebookProfile, savingsAccount));

// console.log(Object.keys(facebookProfile));
// console.log(Object.values(facebookProfile));
// console.log(Object.entries(facebookProfile));

// facebookProfile.postMessage(78);
// console.log(facebookProfile.messages);
// facebookProfile.deleteMessage(1);
// console.log(facebookProfile.messages);

// facebookProfile.addFriend();
// console.log(facebookProfile.friendsAmount);

const cars = [
  { type: 'BMW', price: '30.000' },
  { type: 'MERCEDES', price: '35.000' },
  { type: 'HONDA', price: '18.000' },
  { type: 'VOLVO', price: '25.000' },
];

cars.forEach((car) => {
  //   console.log(`${car.type} car price ${car.price}`);
});

const obj = {
  name: 'Modestas',
  age: 23,
  lastName: 'Dzemida',
};

const arr = [{ test: 'Labas' }, { test2: 'Labas Labas' }];

// const { name, age } = obj;
// const name = obj.name;
// const age = obj.age;

// console.log(name);
// console.log(age);

// const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
// console.log(a);
// console.log(b);

Object.assign(obj, ...arr);

console.log(obj);

function printEverything(target, ...strings) {
  console.log(strings);
  console.log(target);
}

// printEverything('Labas', 'viso', 'dar kazkas');

function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.turnOn = function () {
    alert('vroom!');
  };
}

const myCar = new Car('bmw', 'c3', 'electric');
const yourCar = new Car('VW', 'Arteon', 'diesel');

myCar.turnOn();


