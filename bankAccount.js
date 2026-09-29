// BankAccount class
// This class acts as a blueprint for creating bank accounts
class BankAccount {

    // The constructor creates a new bank account and receives the owner's name, account number and starting balance.
    constructor(owner, accountNumber, balance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = balance;

        // Stores all successful deposits and withdrawals
        this.transactions = [];
        
    }
    // Add money to the account
    deposit(amount) {

        // Prevent deposits of zero or negative amounts
        if (amount <= 0) {
            console.log("Deposit failed: Amount must be greater than 0.")
            return;
        }

        // Add the deposit amount to the current balance
        this.balance = this.balance + amount;

        // Record the successful deposit in the transaction history
        this.transactions.push({
            type: "Deposit",
            amount: amount

        });

        // Confirm the successful deposit
        console.log(`£${amount} deposited successfully.`);
    }

    // Removes money from the account
    withdraw(amount) {

        // Prevents invalid withdrawals and withdrawals that are greater than the available balance
        if (amount <= 0 || amount > this.balance) {
            console.log("Withdrawal failed: Invalid amount or insufficient funds.");
            return;
        }

        // Subtract the withdrawal amount from the current balance
        this.balance = this.balance - amount;


        // Record the successful withdrawal in the transaction history
        this.transactions.push({
            type: "Withdrawal",
            amount: amount
        });

        // Confirm successful withdrawal
        console.log(`£${amount} withdrawn successfully.`);

    }

    // Return the current account balance
    checkBalance() {
        return this.balance;
    }

    // Return account's transaction history
    getTransactions() {
        return this.transactions;
    }
}

// Export the class so it can be imported and used in index.js
 export {BankAccount};