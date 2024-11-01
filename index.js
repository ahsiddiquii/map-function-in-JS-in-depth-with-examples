// Example: 01
/*
// Sample data as if received from a database (e.g., users data)
const data = [
    { id: 1, name: "Alice", age: 25, profession: "Engineer" },
    { id: 2, name: "Bob", age: 30, profession: "Designer" },
    { id: 3, name: "Charlie", age: 28, profession: "Doctor" },
    { id: 4, name: "Diana", age: 35, profession: "Teacher" },
    { id: 5, name: "Evan", age: 22, profession: "Developer" },
    // Add more data if needed
];

// Using map() to transform data into table rows
const tableRows = data.map(item => {
    return `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.profession}</td>
            </tr>`;
}).join(""); // join to convert array of rows to a single string

// Creating the full table with headers and rows
const tableHTML = `
    <table border="1" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Profession</th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
    </table>
`;

// Display the table on the browser window using document.write()
document.write(tableHTML);
*/

// Example: 02
/*
// Sample e-commerce order data as if received from a database or API
const orders = [
    {
        orderId: "ORD001",
        customerName: "John Doe",
        items: [
            { itemName: "Laptop", quantity: 1, price: 999.99 },
            { itemName: "Mouse", quantity: 2, price: 19.99 }
        ],
        status: "Shipped"
    },
    {
        orderId: "ORD002",
        customerName: "Jane Smith",
        items: [
            { itemName: "Smartphone", quantity: 1, price: 799.99 },
            { itemName: "Headphones", quantity: 1, price: 49.99 },
            { itemName: "Charger", quantity: 1, price: 15.99 }
        ],
        status: "Processing"
    },
    {
        orderId: "ORD003",
        customerName: "Alice Johnson",
        items: [
            { itemName: "Desk Lamp", quantity: 3, price: 29.99 },
            { itemName: "Notebook", quantity: 5, price: 4.99 }
        ],
        status: "Delivered"
    }
    // More orders could be added here
];

// Function to calculate the total price for each order
function calculateTotal(items) {
    console.log(items);
    return items.reduce((total, item) => 
        // console.log(total))
        // console.log(item));
      total + item.quantity * item.price, 0).toFixed(2); 
}

// Using map() to generate HTML rows for each order
const orderRows = orders.map(order => {
    // Calculate total price for the current order
    const totalPrice = calculateTotal(order.items);

    // Generate HTML for each row with details
    return `<tr>
                <td>${order.orderId}</td>
                <td>${order.customerName}</td>
                <td>${order.items.map(item => `${item.itemName} (x${item.quantity})`).join(", ")}</td>
                <td>$${totalPrice}</td>
                <td>${order.status}</td>
            </tr>`;
}).join(""); // Join the array into a single HTML string

// Full table HTML with headers and rows
const tableHTML = `
    <table border="1" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Items Purchased</th>
                <th>Total Price</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            ${orderRows}
        </tbody>
    </table>
`;

// Display the table on the browser window using document.write()
document.write(tableHTML);
*/


// 3rd Example with map()
/*

import productsData from "./data.js";
console.log(productsData[0].category);

let uniqueCategoriesObj = {};
  let uniqueCategories = [];

  productsData.map((item) => {
    if (!uniqueCategoriesObj[item.category]) {
      uniqueCategoriesObj[item.category] = true;
      uniqueCategories.push(item.category);
    }
  });

  console.log(uniqueCategories);
  console.log(uniqueCategoriesObj);
  */


