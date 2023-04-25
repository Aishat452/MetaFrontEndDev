//Object literals in JavaScript 

const me = {
  firstName: 'Aishat',
  lastName: 'Adewoyin',
  age: 30,
  hobbies: ['music', 'dancing'],
  address: {
    street: '1234 Main Street',
    city: 'ABUJA',
    state: 'FCT',
  },
  fullName: function() {
    return this.firstName + ' ' + this.city;
  }
};

