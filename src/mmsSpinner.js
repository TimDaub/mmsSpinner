(function(angular) {
  'use strict';

  angular
    .module('mmsSpinner', [])
    .service('mmsSpinnerService', ['$rootScope', function ($rootScope) {
      return {
        start: function (key) {
          $rootScope.$broadcast('mms-spinner:start', key);
        },
        stop: function (key) {
          $rootScope.$broadcast('mms-spinner:stop', key);
        }
      };
    }])
    .directive('mmsSpinner', function() {
      return {
        restrict: 'C',
        link: function(scope, element, attrs) {

          var startSpinner = function(event, key) {
            if(scope.key === key) {
              element.find('span').css('display', 'inline-block');
            }
          };

          var stopSpinner = function(event, key) {
            if(scope.key === key) {
              element.find('span').css('display', 'none');
            }
          };

          var InsertStyleSpinnerAndGetKey = function() {

            if(!attrs.height) {
              attrs.height = '20px';
            }

            if(!attrs.width) {
              attrs.width = '20px';
            }

            if(angular.isDefined(attrs.spinnerKey)) {
              scope.key = attrs.spinnerKey;
            } else {
              scope.key = false;
            }

            element.append(' <span class="small-spinner" style="height:'+attrs.height+'; width:'+attrs.width+'; display: none;"></span>');

          };

          InsertStyleSpinnerAndGetKey();
          scope.$on('mms-spinner:start', startSpinner);
          scope.$on('mms-spinner:stop', stopSpinner);
      
        }
      }
    });


})(window.angular);