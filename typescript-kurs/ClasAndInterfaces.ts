
class SimpleClass{

    private someField: string = 'some string';
    private otherField: number;

    constructor(field?:string){
        this.otherField = parseInt(field);
    }

    public getSomeField(){
        return this.someField;
    }
    public getOtherField(){
        return this.otherField;
    }
}

let instSimpleClass = new SimpleClass('123');
let someField = instSimpleClass.getSomeField();
console.log(someField);
let otherField = instSimpleClass.getOtherField();
console.log(otherField);

interface Car {
    name: string;
    age: number;
    color: string;
    lastRenovation: Date;
}

let car:Car = ({
    name: 'Fiat',
    age: 7,
    color: 'green',
    lastRenovation: new Date()
})

console.log(car);
console.log(car.lastRenovation.getUTCDate());
let json = '{"name": "Ford", "age": 7, "color": "yellow", "lastRenovation": "2018-08-11"}';
let ford = JSON.parse(json);
console.log(ford);