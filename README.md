# JS Banking System

A simple JavaScript banking system built with ES6 classes and modules.

## Project Overview 

This project is a small console-based banking system built to demonstrate core JavaScript and ES6 consepts in a practical example.
The application uses a reusable `BankAccount` class to create individual bank accounts and each account stores information about the account holder, account number, current balances and transaction history. The class provides methods for depositing and withdrawing money, checking the current balance and viewing successful transactions.

The project also demonstrates how JavaScript modules can be used to separate responsibilities. The `BankAccount` class is kept in its own module and exported, while `index.js` imports the class and creates and tests multiple account instances.

The project is intentionally focused on JavaScript logic rather than a visual interface with results displayed through the browser's developer console.

## Features

- Create multiple bank account instances using the reusable `BankAccount` class.
- Store the account holder's name, account number, and current balance.
- Deposit money and update the account balance.
- Withdraw money while checking that sufficient funds are available.
- Prevent invalid withdrawals without changing the account balance.
- Record successful deposits and withdrawals in a transaction history.
- Check the current account balance through a dedicated method.
- Display account information, transaction history, and operation results in the browser console.
- Use ES6 modules to separate the account logic from the application code.

## JavaScript Concepts Demonstrated

The project demonstrates several core JavaScript and ES6 concepts, including:

- Classes and constructors
- Methods and conditional logic
- Arrays and objects for transaction history
- Array methods such as `.push()`
- ES6 modules using `import` and `export`
- Template literals
- Console-based output and testing

## Project Structure

The project is split into a few simple files, with the banking logic separated from the code used to create and test the accounts.

- `bankAccount.js` — Contains the `BankAccount` class and its methods.
- `index.js` — Imports the class, creates account instances, and tests the banking operations.
- `index.html` — Loads the JavaScript application as an ES6 module.
- `README.md` — Contains the project documentation.

## How to Run

1. Open the project folder in VS Code.
2. Open `index.html` using a local development server such as Live Server.
3. Open the browser's developer console.
4. The banking operations and their results will be displayed in the console.

The project does not require any external libraries or dependencies.

## Example Output

When the project is opened and the browser console is viewed, the tests produce output similar to:

- Successful deposit and withdrawal messages
- Current account balances
- Transaction history for each account
- An error message when a withdrawal exceeds the available balance

The exact output depends on the account data and transactions defined in `index.js`.