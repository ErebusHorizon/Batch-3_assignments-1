// BankAccount class definition
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

  updateAccountNumber(newAccountNumber) {
      this.accountNumber = newAccountNumber;
      console.log("Account Number updated to: " + this.accountNumber);
  }

  updateOwnerName(newOwnerName) {
      this.ownerName = newOwnerName;
      console.log("Owner Name updated to: " + this.ownerName);
  }

  updateBalance(newBalance) {
      this.balance = newBalance;
      console.log("Balance updated to: BDT. " + this.balance.toFixed(2));
  }

  displayAccountInfo() {
      console.log("Account Number: " + this.accountNumber);
      console.log("Owner Name: " + this.ownerName);
      console.log("Balance: BDT. " + this.balance.toFixed(2));
  }
}

// Create an instance of BankAccount
const account1 = new BankAccount(100110203010, "H.M. Shahidul Islam", 1000.00);

// ---------Display initial account information--------
console.log("Initial Account Information:");
account1.displayAccountInfo();

// Deposit 500 Tk.
console.log("\nDeposit and Withdrawn:");
account1.deposit(500);
// Withdrawn 300 Tk.
account1.withdraw(300);

// Update account number
console.log("\nUpdated Account Number:");
account1.updateAccountNumber(100110203011);
// Update owner name
account1.updateOwnerName("H.M. Shahidul Islam");
// Update balance
account1.updateBalance(1200);
