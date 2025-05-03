import {createMultiplier} from './higherOrderFunctions'

let byTwo= createMultiplier(2);
console.log('Result (Number *2): ', byTwo(13));

let byEleven= createMultiplier(11);
console.log('Result (Number *11): ', byEleven(9));