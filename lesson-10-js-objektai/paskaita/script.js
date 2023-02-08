function sayStuff() {
  console.log('stuff');
}

const obj = {
  name: 'Modestas',
  lastName: 'Dzemi',
  age: 23,
  sayHello: () => {
    console.log('Hello');
  },
  sayBye: function () {
    console.log('Bye');
  },
  sayKazkas: sayStuff,
  innerObject: {
    name: 'Valius',
    goingDeeper: {
      name: 'kazkas',
    },
  },
};

console.log(obj.innerObject.goingDeeper.name);
