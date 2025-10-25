class Person{
    #name

    constructor(_name){
       this.#name = _name;
    }

    greet = () =>{
        return console.log(`Hola, ${this.#name}`);
    }
}

const person = new Person("Josep");
person.greet();
