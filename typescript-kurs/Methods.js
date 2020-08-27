var Methods = /** @class */ (function () {
    function Methods() {
        this.someVar = 'some string';
        this.method5 = function (arrowMsg1) { return console.log('Some message e.g. attention' + ' ' + arrowMsg1); };
        this.method6 = function () { return 'some attention'; };
        this.method7 = function (msg22) { return 'Another arrow method'; };
    }
    Methods.prototype.method1 = function (digit) {
        console.log(digit);
    };
    Methods.prototype.method2 = function () {
        return 'HELLO TypeScript';
    };
    Methods.prototype.method3 = function (message) {
        console.log(message);
    };
    Methods.prototype.method4 = function (msg1, msg2) {
        if (msg2 === void 0) { msg2 = 'MSG2'; }
        console.log(msg1, msg2);
    };
    Methods.prototype.methodThisProblem = function () {
        return function name() {
            console.log(this.someVar);
        };
    };
    Methods.prototype.methodThisProblemArrow = function () {
        var _this = this;
        return function () {
            console.log(_this.someVar);
        };
    };
    return Methods;
}());
var example1 = new Methods();
example1.method1(33);
var m2 = example1.method2();
console.log(m2);
example1.method3('Some message');
example1.method3();
example1.method3('Method3');
example1.method4('ala ma kota');
example1.method5('arrowMsg1');
var met6 = example1.method6();
console.log(met6);
var met7 = example1.method7('MESSAGE 22');
console.log(met7);
var funThis = example1.methodThisProblem();
funThis();
var funThisArrow = example1.methodThisProblemArrow();
funThisArrow();
