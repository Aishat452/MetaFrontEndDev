//the constructor 

const person = {
  firstName: 'Aishat',
  lastName: 'Adewoyin',
  age: 30,
  hobbies: ['music', 'dancing'],
  address: {
    street: '123 Main Street',
    city: 'Abuja',
    state: 'FCT',
  },
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.firstName); // output: John
console.log(person.hobbies[0]); // output: reading
console.log(person.fullName()); // output


