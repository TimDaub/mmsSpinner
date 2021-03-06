# mmsSpinner

![Demo](https://raw.githubusercontent.com/TimDaub/mmsSpinner/master/demo.gif)

Inspiration: [AngularSpinner](https://github.com/urish/angular-spinner/blob/master/angular-spinner.js)

Dependencies: noopee!

## Installation

**1. Download the directive via `bower`:**

```
bower install mms-spinner --save-dev
```

**2. Include the `.js` and `.css` files into your `index.html`:**

```html
<script src="bower_components/mms-spinner/src/mms-spinner.js"></script>
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
<button type="button" class="btn btn-primary mms-spinner" spinner-key="btnSpinner" height="10px" width="10px" color="black" ng-click="click()">Click me</button>
```

**5. Use mmsSpinnerService to start/stop the spinner:**

```javascript
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
```


## Further Information

* `height` and `width` parameters should always be specified, as they will other wise return default values
* The `spinner-key` attribute must be specified as otherwise the spinner will not be usable
* The `color` attribute you're setting is actually the border color. It will default to black
* A working demo can be found in the demo folder


## Contribution

Feel free to fix bugs or enhance the module. I'd love to see that :)





