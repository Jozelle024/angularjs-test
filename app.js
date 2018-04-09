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