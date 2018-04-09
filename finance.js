angular.module('finance', [])
.factory('currencyConverter', function(){
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    };

    var convert = function (amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };  // a function that converts the currency from current currency - inCurr, to converted currency - outCurr

    return {
        currencies: currencies,
        convert: convert
        
    };
});