# mmsSpinner

![Demo](https://raw.githubusercontent.com/TimDaub/mmsSpinner/master/demo.gif)

Inspiration: [AngularSpinner](https://github.com/urish/angular-spinner/blob/master/angular-spinner.js)

## Installation

**1. Download the directive via `bower`:**

```
bower install mms-spinner --save-dev
```

**2. Include the `.js` and `.css` files into your `index.html`:**

```html
<script src="bower_components/mmsSpinner/src/mms-spinner.js"></script>
<link rel="stylesheet" href="bower_components/mms-spinner/src/mms-spinner.css">
```

**3. Insert the module name into your angular app:**

```javascript
angular.module('yourApp', [
  'mms-spinner',
]);
```

**4. Declare the directive in markup:**

```html
<button type="button" class="btn btn-primary mms-spinner" spinner-key="btnSpinner" height="10px" width="10px" ng-click="click()">Click me</button>
```

**5. Use mmsSpinnerService to start/stop the spinner:**

```javascript
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
```


## Further Information

* `height` and `width` parameters should always be specified, as they will other wise return default values
* The `spinner-key` attribute must be specified as otherwise the spinner will not be usable
* A working demo can be found in the demo folder








