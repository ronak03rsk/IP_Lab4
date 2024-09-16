// Student.js

class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo <= 0) throw new Error("Roll number must be greater than zero.");
        this.rollNo = rollNo;
    }

    printDetails = () => `${super.printDetails()}, Roll No: ${this.rollNo}`;
}

// Example usage
try {
    const exampleStudent = new Student('Jane Doe', '456 Elm St', 'jane@example.com', '0987654321', 101);
    console.log(exampleStudent.printDetails());
} catch (error) {
    console.error(error.message);
}
