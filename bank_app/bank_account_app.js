class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
  
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited BDT." + amount.toFixed(2) + " New balance: BDT." + this.balance.toFixed(2));
    }
  
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log("Withdrawn BDT. " + amount.toFixed(2) + " New balance: BDT. " + this.balance.toFixed(2));
        }
    }
  
    getBalance() {
        return this.balance;
    }
  //This method updates the account property of the bank account object to the new value specified by newAccountNumber,updateOwnerName, updateBalance(newBalance).
    updateAccountNumber(newAccountNumber) {
        this.accountNumber = newAccountNumber;
        console.log("Account Number: " + this.accountNumber);
    }
  
    updateOwnerName(newOwnerName) {
        this.ownerName = newOwnerName;
        console.log("Owner Name : " + this.ownerName);
    }
  
    updateBalance(newBalance) {
        this.balance = newBalance;
        console.log("Final Balance: BDT. " + this.balance.toFixed(2));
    }
  
    displayAccountInfo() {
        console.log("Account Number: " + this.accountNumber);
        console.log("Owner Name: " + this.ownerName);
        console.log("Balance: BDT. " + this.balance.toFixed(2));
    }
}

// Create an instance of BankAccount
const account1 = new BankAccount(100110203010, "H.M. Shahidul Islam", 1000.00);

// Output/Display initial account information
console.log("Initial Account Information:");
account1.displayAccountInfo();

//Deposit, Withdraw and Insufficient Output:
console.log("\nDeposit, Withdraw and Insufficient:");
account1.deposit(500); // Deposit 500 Tk.
account1.withdraw(300); // Withdraw 300 Tk.

// Attempting to withdraw more than the available balance will show Insufficient funds and the final balance will change dynamically. If an attempt is made to withdraw any number less than the available balance then the final balance will show whatever is left.
console.log("\nAttempting to withdraw more than the available balance will show Insufficient funds:");
account1.withdraw(1200);

// Update account number
console.log("\nUpdated Account Information:");
account1.updateAccountNumber(100110203010);
account1.updateOwnerName("H.M. Shahidul Islam"); // Update owner name
account1.updateBalance(account1.getBalance()); // Update Final balance
