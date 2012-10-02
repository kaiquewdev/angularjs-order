var OrderApp = angular.module(
    'OrderApp', ['OrderApp']
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

    // Edit
    routes.when('/product/edit/:id', {
        templateUrl: '/partials/product/edit',
        controller: EditProductController
    });

    // Delete 
    routes.when('/product/delete/:id', {
        templateUrl: '/partials/product/delete',
        controller: DeleteProductController
    });

    routes.otherwise('/');

    $locationProvider.html5Mode( true );
}]);
