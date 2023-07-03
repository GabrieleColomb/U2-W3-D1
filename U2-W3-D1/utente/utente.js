class User {
    constructor(firstname, lastname, age, location) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstname} è più vecchio di ${otherUser.firstname}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstname} è più giovane di ${otherUser.firstname}`;
      } else {
        return `${this.firstname} ha la stessa età di ${otherUser.firstname}`;
      }
    }
  }


const user1 = new User('John', 'Doe', 25, 'New York');
const user2 = new User('Jane', 'Smith', 30, 'London');
const user3 = new User('Alice', 'Johnson', 28, 'Paris');
const user4 = new User('Gabriele', 'Colombo', 20, 'Milano');

console.log(user1.compareAge(user2)); // Output: "John è più giovane di Jane"
console.log(user2.compareAge(user1)); // Output: "Jane è più vecchia di John"
console.log(user2.compareAge(user3)); // Output: "Jane è più vecchia di Alice"
console.log(user3.compareAge(user2)); // Output: "Alice è più giovane di Jane"
console.log(user1.compareAge(user3)); // Output: "John ha la stessa età di Alice"
console.log(user4.compareAge(user1)); // Output: "Gabriele è più giovane di John"
console.log(user4.compareAge(user2)); // Output: "Gabriele è più giovane di Jane"
console.log(user4.compareAge(user3)); // Output: "Gabriele è più giovane di Alice"