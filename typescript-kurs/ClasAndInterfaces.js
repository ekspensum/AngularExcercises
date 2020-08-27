var SimpleClass = /** @class */ (function () {
    function SimpleClass(field) {
        this.someField = 'some string';
        this.otherField = parseInt(field);
    }
    SimpleClass.prototype.getSomeField = function () {
        return this.someField;
    };
    SimpleClass.prototype.getOtherField = function () {
        return this.otherField;
    };
    return SimpleClass;
}());
var instSimpleClass = new SimpleClass('123');
var someField = instSimpleClass.getSomeField();
console.log(someField);
var otherField = instSimpleClass.getOtherField();
console.log(otherField);
var car = ({
    name: 'Fiat',
    age: 7,
    color: 'green',
    lastRenovation: new Date()
});
console.log(car);
console.log(car.lastRenovation.getUTCDate());
var json = '{"name": "Ford", "age": 7, "color": "yellow", "lastRenovation": "2018-08-11"}';
var ford = JSON.parse(json);
console.log(ford);
