'use strict';

/* Directives */

angular.module('cp-core.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
