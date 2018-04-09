angular.module('App', ['main']); //to create another module, [] array of dependencies
angular.module('main', []);
angular.module('main').controller('mainController', function($scope){ 
    // controller that controls the whole element with ng-controller="main controller"
    // controller body
    var data = " this is a data";
    var data2 = " this is another data";
    $scope.data = "this is the scope";
    $scope.data2 = "this is scope data2";
});

angular.module('invoice', []).controller('invoiceController', function invoiceController(){
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeign = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    }

    this.total = function total(outCurr) {
        return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    }; // total is a function that calls convert currency 

    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };  // a function that converts the currency from current currency - inCurr, to converted currency - outCurr

    this.pay = function pay() {
        window.alert('Thanks!');
    };
});