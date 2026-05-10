class BankAccount {
  #owner;
  #balance;
  #pin;
  #isLoggedIn; // tracks if pin is verified

  constructor(owner, balance, pin) {
    this.#owner = owner;
    this.#balance = balance;
    this.#pin = pin;
    this.#isLoggedIn = false; // logged out by default
  }

  // ─── STEP 1: LOGIN WITH PIN ─────────────────────
  login(enteredPin) {
    if (enteredPin === this.#pin) {
      this.#isLoggedIn = true;
      console.log(`Welcome ${this.#owner}! Login successful.`);
    } else {
      console.log("Wrong PIN! Access denied.");
    }
  }

  // ─── STEP 2: LOGOUT ─────────────────────────────
  logout() {
    this.#isLoggedIn = false;
    console.log(` ${this.#owner} logged out successfully.`);
  }

  // ─── PRIVATE HELPER: Check if logged in ─────────
  // this method is also private — only used internally
  #checkLogin() {
    if (!this.#isLoggedIn) {
      console.log("Please login with your PIN first!");
      return false;
    }
    return true;
  }

  // ─── SERVICES (only work after login) ───────────

  getBalance() {
    if (!this.#checkLogin()) return; // blocked if not logged in
    console.log(`${this.#owner}'s balance: ₹${this.#balance}`);
  }

  deposit(amount) {
    if (!this.#checkLogin()) return; // blocked if not logged in
    if (amount <= 0) {
      console.log("Deposit amount must be positive!");
      return;
    }
    this.#balance += amount;
    console.log(`₹${amount} deposited. New balance: ₹${this.#balance}`);
  }

  withdraw(amount) {
    if (!this.#checkLogin()) return; // blocked if not logged in
    if (amount <= 0) {
      console.log("Amount must be positive!");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
      return;
    }
    this.#balance -= amount;
    console.log(`₹${amount} withdrawn. New balance: ₹${this.#balance}`);
  }

  changePin(oldPin, newPin) {
    if (!this.#checkLogin()) return; // blocked if not logged in
    if (oldPin !== this.#pin) {
      console.log("Wrong old PIN!");
      return;
    }
    if (newPin.toString().length !== 4) {
      console.log("New PIN must be 4 digits!");
      return;
    }
    this.#pin = newPin;
    console.log("PIN changed successfully!");
  }
}

// ════════════════════════════════════════════
//              TESTING
// ════════════════════════════════════════════

const account = new BankAccount("Ravi", 10000, 1234);

// ─── trying services WITHOUT login ──────────
account.getBalance(); // Please login with your PIN first!
account.deposit(5000); // Please login with your PIN first!

// ─── wrong pin ──────────────────────────────
account.login(9999); // Wrong PIN! Access denied.
account.getBalance(); //Please login with your PIN first!

// ─── correct pin ────────────────────────────
account.login(1234); //Welcome Ravi! Login successful.

// ─── now all services work ──────────────────
account.getBalance(); // ₹10000
account.deposit(5000); // New balance: ₹15000
account.withdraw(3000); // New balance: ₹12000
account.withdraw(999999); // Insufficient balance!
account.changePin(1234, 5678); // PIN changed successfully!
account.changePin(1234, 5678); // Wrong old PIN!

// ─── logout ─────────────────────────────────
account.logout(); // Ravi logged out successfully.

// ─── trying after logout ────────────────────
account.getBalance(); // Please login with your PIN first!
account.withdraw(1000); // 🔒 Please login with your PIN first!

// ─── trying to hack directly ────────────────
// console.log(account.#balance); //ERROR — private!
// console.log(account.#pin); // ERROR — private!
// account.#isLoggedIn = true; //ERROR — private!
