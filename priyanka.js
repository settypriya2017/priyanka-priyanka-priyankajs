let bills = [];
let clerks = [];

function addItem() {
    const item = document.getElementById('item').value;
    if (item) {
        // Add item to the current bill
        currentBill().items.push(item);
        displayOutput(`Item "${item}" added to the bill.`);
    } else {
        displayOutput('Please enter a valid item.');
    }
}

function checkout() {
    const bill = currentBill();
    if (bill.items.length > 0) {
        // Process the checkout logic (e.g., calculate total, update payments, etc.)
        displayOutput('Bill checked out successfully.');
        // Reset the current bill
        bills.push(bill);
        resetBill();
    } else {
        displayOutput('Please add items to the bill before checking out.');
    }
}

function saveBill() {
    const bill = currentBill();
    if (bill.items.length > 0) {
        // Save the current bill for later
        displayOutput('Bill saved for later.');
        // Reset the current bill
        resetBill();
    } else {
        displayOutput('Please add items to the bill before saving.');
    }
}

function viewSummary() {
    // Display a summary of all bills
    if (bills.length > 0) {
        displayOutput('Summary of all bills:\n' + JSON.stringify(bills, null, 2));
    } else {
        displayOutput('No bills available.');
    }
}

function viewClerks() {
    // Display a list of all clerks
    if (clerks.length > 0) {
        displayOutput('List of clerks:\n' + JSON.stringify(clerks, null, 2));
    } else {
        displayOutput('No clerks available.');
    }
}

function viewPayments() {
    // Display a summary of payments
    // Implement your payment summary logic here
    displayOutput('Payment summary not implemented yet.');
}

function currentBill() {
    const currentClerk = getCurrentClerk();
    if (!currentClerk.bill) {
        currentClerk.bill = {
            items: []
        };
    }
    return currentClerk.bill;
}

function resetBill() {

    const currentClerk = getCurrentClerk();
    currentClerk.bill = null;
}

function getCurrentClerk() {

    return clerks[0];
}

function displayOutput(message) {

    const outputDiv = document.getElementById('output');
    outputDiv.innerText = message;
}