// Import the BankAccount class from bankAccount.js
import { BankAccount } from "./bankAccount.js";

// Create the first bank account using BankAccount class
const user1Account = new BankAccount("Sarah", "123456", 1200);

// Create the second bank account using the same class
const user2Account = new BankAccount("Alex", "654321", 800);

// Test depositing money into User 1's account
user1Account.deposit(300);

// Test withdrawing money from User 1's account
user1Account.withdraw(200);

// Check User 1's current balance
console.log(`Current balance: £${user1Account.checkBalance()}`);

//Display User 1's transaction history
console.log(user1Account.getTransactions());

// Test an unsuccessful withdrawal
user1Account.withdraw(2000);

// Check the balance again to confirm that the failed withdrawal did not change the account balance
console.log(`Final balance: £${user1Account.checkBalance()}`);

// Test depositing money into User 2's account
user2Account.deposit(100);

// Test withdrawing money from User 2's account
user2Account.withdraw(50);

// Check User 2's current balance 
console.log(`Current balance: £${user2Account.checkBalance()}`);


// Display User 2's transaction history
console.log(user2Account.getTransactions());



