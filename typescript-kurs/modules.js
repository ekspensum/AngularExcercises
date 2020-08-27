"use strict";
exports.__esModule = true;
exports.PI = exports.Two = exports.One = void 0;
var One = /** @class */ (function () {
    function One(one) {
        this.one = one;
    }
    /**
     * getOne
     */
    One.prototype.getOne = function () {
        console.log(this.one);
    };
    return One;
}());
exports.One = One;
var Two = /** @class */ (function () {
    function Two(two) {
        this.two = two;
        console.log(this.two);
    }
    return Two;
}());
exports.Two = Two;
exports.PI = 3.14;
