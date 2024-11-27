const addExpenseButton = document.getElementById('add-expense-button');
const table = document.getElementById('data');
const addExpensePopup = document.getElementById('add-expense-popup');
const cancelExpenseButton = document.getElementById('cancel-expense');
const submitExpenseButton = document.getElementById('enter-expense');
const expenseAmountEntry = document.getElementById("amount");
const expenseMerchantEntry = document.getElementById("merchant");
const expenseCategoryEntry = document.getElementById("category");
const expenseDateEntry = document.getElementById("date");

addExpenseButton.addEventListener('click', () => {
    addExpensePopup.style.display = 'block';
});

cancelExpenseButton.addEventListener('click', () => {
    addExpensePopup.style.display = 'none';
    expenseAmountEntry.value = '';
    expenseMerchantEntry.value = '';
    expenseCategoryEntry.value = '';
    expenseDateEntry.value = '';
});

submitExpenseButton.addEventListener('click', (event) => {
    event.preventDefault();

    let expense = expenseAmountEntry.value;
    let merchant = expenseMerchantEntry.value;
    let category = expenseCategoryEntry.value;
    let date = expenseDateEntry.value;

    let tdExpense = document.createElement("td");
    let tdMerchant = document.createElement("td");
    let tdCategory = document.createElement("td");
    let tdDate = document.createElement("td");

    tdExpense.innerText = "$" + expense;
    tdMerchant.innerText = merchant;
    tdCategory.innerText = category;
    tdDate.innerText = date;

    // Create a new row and append the <td> elements to it
    let newRow = document.createElement("tr");
    newRow.appendChild(tdExpense);
    newRow.appendChild(tdMerchant);
    newRow.appendChild(tdCategory);
    newRow.appendChild(tdDate);

    // Append the new row to the table
    table.appendChild(newRow);

    // Hide the popup after adding the expense
    addExpensePopup.style.display = 'none';

    // Optionally clear the form inputs after submission
    expenseAmountEntry.value = '';
    expenseMerchantEntry.value = '';
    expenseCategoryEntry.value = '';
    expenseDateEntry.value = '';
});

