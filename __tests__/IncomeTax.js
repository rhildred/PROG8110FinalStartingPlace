import {IncomeTax} from '../src/IncomeTax.js';

let oIncomeTax = new IncomeTax();

it('checks for oIncomeTax', ()=>{
    expect(oIncomeTax).toBeTruthy()
});

it('checks for Ontario tax on $1000', ()=>{
    expect(oIncomeTax.ontarioTax(1000)).toBe(50.5);
});

it('checks for Ontario tax on $50,000', ()=>{
    expect(oIncomeTax.ontarioTax(50000)).toBe(2897.64);
});

it('checks for Federal tax on $1000', ()=>{
    expect(oIncomeTax.federalTax(1000)).toBe(150);
});