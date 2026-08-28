import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {rendercheckoutHeader} from './checkout/checkoutHeader.js';
import {loadFromStorage } from '../data/cart.js';
import '../data/cart-class.js'

loadFromStorage();
rendercheckoutHeader();
renderOrderSummary();
renderPaymentSummary();

