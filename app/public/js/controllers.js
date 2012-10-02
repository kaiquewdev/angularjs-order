var IndexController = function ( 
    $scope, 
    $http 
) {
    $http.get(
        '/api/product/list'
    ).success(function ( 
        data, 
        status, 
        headers, 
        config 
    ) {
        $scope.products = data.products;
    });    
};

var ReadProductController = function ( 
    $scope, 
    $http, 
    $routeParams 
) {
    var product = {
        id: $routeParams.id    
    };

    $scope.product = {};
    $http.get('/api/product/read/' + product.id ).success(function ( data ) {
        $scope.product = data.product;    
    });
};

var NewProductController = function ( 
    $scope, 
    $http, 
    $location 
) {
    $scope.form = {};
    $scope.productNew = function () {
        $http.post('/api/product/new', $scope.form).success(function ( data ) {
            $location.path('/');
        });
    };
};

var EditProductController = function ( 
    $scope, 
    $http, 
    $location, 
    $routeParams 
) {
    var product = {
        id: $routeParams.id 
    };

    $scope.form = {};
    $http.get('/api/product/read/' + product.id).success(function ( data ) {
        $scope.form = data.product;    
    });

    $scope.productEdit = function () {
        $http.put(
            '/api/product/edit/' + product.id, 
            $scope.form
        ).success(function ( data ) {
            $location.url('/product/read/' + product.id);
        });
    };
};

var DeleteProductController = function ( 
    $scope, 
    $http, 
    $location, 
    $routeParams 
) {
    var product = {
        id: $routeParams.id 
    };

    $scope.product = {};
    $http.get('/api/product/read/' + product.id).success(function ( data ) {
        $scope.product = data.product;    
    });

    $scope.productDelete = function () {
        $http.delete(
            '/api/product/delete/' + product.id 
        ).success(function ( data ) {
            $location.url('/'); 
        });
    };

    $scope.home = function () {
        $location.url('/');    
    };
};
