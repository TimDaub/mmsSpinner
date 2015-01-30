'use strict';

// Declare app level module which depends on views, and components
angular.module('testApp', [
  'mmsSpinner',
])
.controller('mainCtrl', ['mmsSpinnerService', '$scope', function(mmsSpinnerService, $scope) {
  
  var on = false;

  $scope.click = function() {
    on = !on;

    if(on) {
      mmsSpinnerService.start('btnSpinner');
    } else {
      mmsSpinnerService.stop('btnSpinner');
    }

  };

}]);
