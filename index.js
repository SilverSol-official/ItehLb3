const person = [
    {name:"Ivan",
    surname:"Soloviov",
    age:19,
    maried:false,},
]

class human {
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
}

class student extends human {
    constructor(uni){
        super(uni);
        this.uni = uni;
    }
}

const ivan = new student ('Ivan',19,"NURE");

console.log(ivan);