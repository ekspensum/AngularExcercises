import {One, Two} from './modules';
import * as models from './modules';

let one = new One('some string');
let two = new models.Two(852);
one.getOne();
console.log(models.PI);