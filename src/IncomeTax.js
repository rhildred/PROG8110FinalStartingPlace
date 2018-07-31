export class IncomeTax{
    ontarioTax(nTaxableIncome){
        let nOntarioTax = .0505 * nTaxableIncome;
        if(nTaxableIncome > 40922 && nTaxableIncome <= 81847 ){
            nOntarioTax = (nTaxableIncome - 40922) * .0915 + 2067;
        }
        return Number(nOntarioTax.toFixed(2));
    }
    federalTax(nTaxableIncome){
        let nFederalTax = .15 * nTaxableIncome;
        return Number(nFederalTax.toFixed(2));
    }

}