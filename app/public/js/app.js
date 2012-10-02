var OrderApp = angular.module(
    'OrderApp', []
);

OrderApp.config([
    '$routeProvider',
    '$locationProvider'
, function ( $routeProvider, $locationProvider ) {
    var routes = $routeProvider;
    
    // Home 
    routes.when('/', {
        templateUrl: '/partials/product/index',
        controller: IndexController
    });

    // Read product
    routes.when('/product/read/:id', {
        templateUrl: '/partials/product/read',
        controller: ReadProductController
    });

    // New product
    routes.when('/product/new', {
        templateUrl: '/partials/product/new',
        controller: NewProductController
    });

    $locationProvider.html5Mode( true );
}]);
