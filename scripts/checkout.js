import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {rendercheckoutHeader} from './checkout/checkoutHeader.js';
import {loadFromStorage } from '../data/cart.js';
import { loadProducts } from '../data/products.js';
// import '../data/car.js';
// import '../data/backendpractise.js'
loadProducts(()=>{
    loadFromStorage();
    rendercheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})



