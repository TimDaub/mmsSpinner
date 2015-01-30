'use strict';

// Declare app level module which depends on views, and components
angular.module('testApp', [
  'mms-spinner',
])
.controller('mainCtrl', ['MmsSpinnerService', '$scope', function(MmsSpinnerService, $scope) {
  
  var on = false;

  $scope.click = function() {
    on = !on;

    if(on) {
      MmsSpinnerService.start('btnSpinner');
    } else {
      MmsSpinnerService.stop('btnSpinner');
    }

  };

}]);
