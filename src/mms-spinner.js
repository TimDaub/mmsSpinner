(function(angular) {
  'use strict';

  angular
    .module('mms-spinner', [])
    .service('MmsSpinnerService', ['$rootScope', function ($rootScope) {
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

          var insertStyleSpinnerAndGetKey = function() {

            if(!attrs.height) {
              attrs.height = '20px';
            }

            if(!attrs.width) {
              attrs.width = '20px';
            }

            if(!attrs.color) {
              attrs.color = '2px solid black';
            } else {
              attrs.color = '2px solid '+attrs.color;
            }

            if(angular.isDefined(attrs.spinnerKey)) {
              scope.key = attrs.spinnerKey;
            } else {
              scope.key = false;
            }

            element.append(' <span class="small-spinner" style="height:'+attrs.height+'; width:'+attrs.width+'; display: none; border:'+attrs.color+'; border-radius:50%; border-left-color: transparent; border-right-color: transparent;"></span>');

          };

          insertStyleSpinnerAndGetKey();
          scope.$on('mms-spinner:start', startSpinner);
          scope.$on('mms-spinner:stop', stopSpinner);
      
        }
      }
    });


})(window.angular);