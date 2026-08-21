import {formatCurrency} from '../scripts/utils/money.js';

describe('Test Suit : formatCurrency', ()=>{
    it('converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95')
    });
    it('Works with Zero(0)',()=>{
        expect(formatCurrency(0)).toEqual('0.00')
    });
    it('Checks with Point Value',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });
    it('Checks with Point Value',()=>{
        expect(formatCurrency(2000.4)).toEqual('20.00')
    });
})