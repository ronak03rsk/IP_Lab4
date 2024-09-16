// Person.js

class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    printDetails = () => `Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}`;
}

// Example usage
const examplePerson = new Person('John Doe', '123 Main St', 'john@example.com', '1234567890');
console.log(examplePerson.printDetails());
