// Form.js

const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);

const processOrder = (event) => {
    event.preventDefault();

    const tagline = document.getElementById('tagline').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const recipientName = document.getElementById('recipient-name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Create a Person object
    const person = new Person(recipientName, address, email, phone);
    console.log(person.printDetails());

    // Create a Student object (example)
    try {
        const student = new Student(recipientName, address, email, phone, quantity);
        console.log(student.printDetails());
    } catch (error) {
        alert(error.message);
        return false;
    }

    // Generate receipt
    const receipt = document.getElementById('receipt');
    const date = new Date();
    receipt.innerHTML = `
        <h2>Order Receipt</h2>
        <p>Date: ${date.toLocaleDateString()}</p>
        <p>Tagline: ${tagline}</p>
        <p>Quantity: ${quantity}</p>
        <p>Delivery Date: ${deliveryDate}</p>
        <p>Recipient: ${recipientName}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
    `;
    receipt.style.display = 'block';

    return false; // Prevent form submission
}
