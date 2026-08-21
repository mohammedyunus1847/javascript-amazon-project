import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test Suit : formatCurrency');


console.log("cnverts cents into dollars");

if(formatCurrency(2095)==='20.95'){
    console.log('passed')
}else{
    console.log('Failed')
};

console.log(" Works with Zero(0) ")

if(formatCurrency(0)==='0.00'){
    console.log('Passed');
}else{
    console.log('Failed')
};

console.log('Checks with Point Value')

if(formatCurrency(2000.5)==='20.01'){
    console.log('Passed');
}else{
    console.log('Failed');
};

console.log('Checks with Point Value')

if(formatCurrency(2000.4)==='20.00'){
    console.log('Passed')
}else{
    console.log('Failed');
};