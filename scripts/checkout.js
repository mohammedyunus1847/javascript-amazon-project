import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {rendercheckoutHeader} from './checkout/checkoutHeader.js';
import {loadFromStorage } from '../data/cart.js';
import { loadProducts } from '../data/products.js';
import { loadCarts } from '../data/cart.js';
// import '../data/car.js';
// import '../data/backendpractise.js'

Promise.all([
    new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1'); //if we give a value to the resolve it wiil be recieve on the then parameter
    })
    })
    ,
    new Promise((resolve)=>{
        loadCarts(()=>{
            resolve();
        })
    })
]).then((value)=>{
    console.log(value)
    loadFromStorage();
    rendercheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    })
}).then(()=>{
    return new Promise((resolve)=>{
        loadCarts(()=>{
            resolve();
        })
    })
}).then(()=>{
    loadFromStorage();
    rendercheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
*/

// loadProducts(()=>{
//     loadFromStorage();
//     rendercheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// })



