class BankAccount{
    #balance = 0;
    #pin;

    constructor(pin) { this.#pin = pin; };

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `+₹${amount} deposited. current Balance: ₹${this.#balance}`;
        }
        return `Invalid amount!`
    }

    withdraw(amount, pin) {
        if (pin !== this.#pin) return `Wrong pin! please enter pin again.`;
        if (amount > this.#balance) return `Insufficient fund.`;
        this.#balance -= amount;
        return `-₹${amount} debited from your account. Availabe balance : ₹${this.#balance}`;
    }

    get balance(){return `Your current balance is ${this.#balance}. Thank You!`}
}

const acc = new BankAccount(1234);
console.log(acc.balance);
console.log(acc.deposit(10000));
console.log(acc.balance);
console.log(acc.withdraw(3000, 1234));
console.log(acc.withdraw(3000, 1114));
console.log(acc.balance);

