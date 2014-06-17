var opalapp =  angular.module('opal', [])

controllers = angular.module('opal.ic.controllers', [
    'mgcrea.ngStrap.typeahead',
    'opal.services',

])
controllers.controller('RootCtrl', function($scope) {
	$scope.keydown = function(e) {
		$scope.$broadcast('keydown', e);
	};
});

var app = angular.module('opal.ic', [
    'ngRoute',
    'opal.directives',
    'opal.ic.controllers'])

// See http://stackoverflow.com/questions/8302928/angularjs-with-django-conflicting-template-tags
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

app.config(function($routeProvider){
    $routeProvider.when('/', {redirectTo: '/report'})
    .when('/report', {
        controller: 'ReportCtrl',
        resolve: {
	    options: function(Options) { return Options; },
            schema: function(listSchemaLoader){ return listSchemaLoader() },
        },
        templateUrl: '/infectioncontrol/templates/report.html'
    })
})
