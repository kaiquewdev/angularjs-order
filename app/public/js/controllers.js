var IndexController = function IndexController ( $scope, $http ) {
    $http.get('/api/product/list').success(function ( data, status, headers, config ) {
        $scope.products = data.products;
    });    
};

var ReadProductController = function ReadProductController ( $scope, $http, $routeParams ) {
    var product = {
        id: $routeParams.id    
    };

    $scope.product = {};
    $http.get('/api/product/read/' + product.id ).success(function ( data ) {
        $scope.product = data.product;    
    });
};

var NewProductController = function NewProductController ( $scope, $http, $location ) {
    $scope.form = {};
    $scope.productNew = function () {
        $http.post('/api/product/new', $scope.form).success(function ( data ) {
            $location.path('/'); 
        });
    };
};

/*var NewPostController = function NewPostController ( $scope, $http, $location ) {
    $scope.form = {};
    $scope.postSubmit = function () {
        $http.post('/api/post/new', $scope.form).success(function ( data ) {
            $location.path('/');    
        });    
    };
};

var ReadPostController = function ReadPostController ( $scope, $http, $routeParams ) {
    var post = {
        id: $routeParams.id
    };

    $scope.post = {};
    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;
    });
};

var EditPostController = function EditPostController ( $scope, $http, $location, $routeParams ) {
    var post = {
        id: $routeParams.id
    };    

    $scope.post = {};
    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;    
    });

    $scope.postEdit = function () {
        $http.put('/api/post/edit/' + post.id, $scope.form).success(function ( data ) {
            $location.url('/post/read' + post.id );    
        }); 
    };
};

var DeletePostController = function DeletePostController ( $scope, $http, $location, $routeParams ) {
    var post = {
        id: $routeParams.id
    };

    $http.get('/api/post/read/' + post.id).success(function ( data ) {
        $scope.post = data.post;    
    });

    $scope.postDelete = function () {
        $http.delete('/api/post/delete/' + post.id).success(function ( data ) {
            $location.url('/');
        });   
    };

    $scope.home = function () {
        $location.url('/');    
    };
};*/
