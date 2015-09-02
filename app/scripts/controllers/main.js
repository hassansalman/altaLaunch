'use strict';

/**
 * @ngdoc function
 * @name altaLaunchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the altaLaunchApp
 */
angular.module('altaLaunchApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'Web Development',
      'Marketing/Branding',
      'Mobile Applications'
    ];
  })

.controller('ContactCtrl', function($scope) {
    $scope.todos = ['Name', 'Number', 'Email'];
});