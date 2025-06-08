// Menu items with images
const menuItems = [
    { name: "Truffle Risotto", description: "Creamy risotto with black truffle shavings", price: "$35", image: "truffle-risotto.jpeg" },
    { name: "Filet Mignon", description: "Tender beef steak with garlic butter", price: "$45", image: "filet-mignon.jpeg" },
    { name: "Lobster Bisque", description: "Rich and creamy lobster soup", price: "$30", image: "lobster-bisque.jpeg" }
];

// Dessert items with images
const dessertItems = [
    { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten center", price: "$15", image: "chocolate-lava-cake.jpeg" },
    { name: "Cheesecake", description: "Classic cheesecake with a graham cracker crust", price: "$12", image: "cheesecake.jpeg" }
];

// Display the menu items
const menuSection = document.querySelector('.menu-items');
menuItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-image">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
    `;
    menuSection.appendChild(menuItemDiv);
});

// Display the dessert items
const dessertSection = document.querySelector('.dessert-items');
dessertItems.forEach(item => {
    const dessertItemDiv = document.createElement('div');
    dessertItemDiv.classList.add('menu-item');
    dessertItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-image">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
    `;
    dessertSection.appendChild(dessertItemDiv);
});

// Handle reservation form submission
const reservationForm = document.getElementById('reservationForm');
const confirmationDiv = document.getElementById('confirmation');

reservationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Display the confirmation ticket
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h3>Reservation Confirmation</h3>
        <p>Thank you, ${name}!</p>
        <p>Your table for ${guests} is reserved on ${date} at ${time}.</p>
        <p>A confirmation email has been sent to ${email}.</p>
        <p><strong>Reservation Code:</strong> ${generateReservationCode()}</p>
    `;

    reservationForm.reset();  // Clear the form
    confirmationDiv.style.display = 'block';  // Show confirmation ticket
});

// Generate a simple reservation code
function generateReservationCode() {
    return 'RES-' + Math.floor(Math.random() * 10000);
}
