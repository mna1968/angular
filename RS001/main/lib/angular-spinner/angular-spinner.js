/**
 * angular-spinner version 0.3.0
 * License: MIT.
 * Copyright (C) 2013, 2014, Uri Shaked and contributors.
 */

(function(window, angular, undefined) {
	'use strict';

	angular.module('angularSpinner', [])

		.factory('usSpinnerService', ['$rootScope', function ($rootScope) {
			var config = {};

			config.spin = function (key) {
				$rootScope.$broadcast('us-spinner:spin', key);
			};

			config.stop = function (key) {
				$rootScope.$broadcast('us-spinner:stop', key);
			};

			return config;
		}])

		.directive('usSpinner', ['$window', function ($window) {
			return {
				replace: true,
				scope: true,
				controller: function ($scope, $element, $attrs) {
					$scope.spinner = null;
					$scope.key = angular.isDefined($attrs.spinnerKey) ? $attrs.spinnerKey : false;
					$scope.startActive = angular.isDefined($attrs.spinnerStartActive) ?
						$attrs.spinnerStartActive : $scope.key ?
						false: true;

					$scope.spin = function () {
						if ($scope.spinner) {
							$scope.spinner.spin($element[0]);
							$element.show();
						}
					};

					$scope.stop = function () {
						if ($scope.spinner) {
							$scope.spinner.stop();
							$element.hide();
						}
					};
				},
				template: '<div style="display: inline-block; position: relative; left: 40% "><span id="spinnerLoading" rel="spinner"></span> <label style="margin-top: -10px;margin-left: 15px">Loading...</label></div>',
				link: function (scope, element, attr) {
					scope.$watch(attr.usSpinner, function (options) {
						scope.stop();

						// initialize the spinner
						$(element).find('#spinnerLoading').spin(options);
						scope.spinner = $(element).find('#spinnerLoading').data('spinner');

						if (!scope.key || scope.startActive) {
							scope.spinner.spin();
						}
					}, true);

					scope.$on('us-spinner:spin', function (event, key) {
						if(key === scope.key){
							scope.spin();
						}
					});

					scope.$on('us-spinner:stop', function (event, key) {
						if(key === scope.key){
							scope.stop();
						}
					});

					scope.$on('$destroy', function () {
						scope.stop();
						scope.spinner = null;
					});
				}
			};
		}]);

})(window, window.angular);
