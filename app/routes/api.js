var vodevil = require('vodevil');

// Mockup for posts
var data = {
    products: [{
        name: 'Node.js T-shirt',
        price: 'R$ 10',
        details: 'A new t-shirt, of node.js'
    }]     
};

exports.product = {
    list: function ( req, res ) {
        var output = {};
        
        output['products'] = vodevil.intersect(data.products, function ( product, id ) {
            return {
                id: id,
                name: product.name,
                price: product.price,
                details: product.details
            };    
        });

        res.json( output );
    },

    new: function ( req, res ) {
        data.products.push( req.body );
        res.json( req.body );
    },

    read: function ( req, res ) {
        var output = {},
            product = {
                id: req.params.id    
            };

        if ( product.id >= 0 && product.id < data.products.length ) {
            output['product'] = data.products[ product.id ];    
        }

        res.json( output );
    },

    edit: function ( req, res ) {
        var output = false,
            product = {
                id: req.params.id    
            };

        if ( product.id >= 0 && product.id < data.products.length ) {
            data.products[ product.id ] = req.body;    
            output = true;
        }

        return output;
    },

    delete: function ( req, res ) {
        var output = false,
            product = {
                id: req.params.id    
            };

        if ( product.id >= 0 && product.id < data.products.length ) {
            var options = vodevil.set( data.products );

            output = options.remove( product.id );

            data.products = options.object;
        }

        res.json( output );
    },
};
