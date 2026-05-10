class Person{

    #firstName;
    #lastName;

    constructor(firstName,lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName() {
        return `Hello my name is ${this.#firstName} ${this.#lastName}`;
    }

    setFullname(name) {
        const parts = name.split(" ");
        this.#firstName = parts[0];
        this.#lastName = parts[1];
    }
}

const per = new Person("Ritesh", "Sharma");
console.log(per.getFullName());

//after setting new name

per.setFullname("Amit kumar");
console.log(per.getFullName());
