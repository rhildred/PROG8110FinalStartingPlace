export class IncomeTax{
    ontarioTax(nTaxableIncome){
        let nOntarioTax = .0505 * nTaxableIncome;
        return Number(nOntarioTax.toFixed(2));
    }
    federalTax(nTaxableIncome){
        let nFederalTax = .15 * nTaxableIncome;
        return Number(nFederalTax.toFixed(2));
    }

}