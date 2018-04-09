angular.module('invoice', ['finance'])
.controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
    // adds currencyConverter as a dependency for the controller
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = currencyConverter.currencies;

  this.total = function total(outCurr) {
    return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.pay = function pay() {
    window.alert('Thanks!');
  };
}]);