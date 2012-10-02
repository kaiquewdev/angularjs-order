
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Angular Order' });
};

exports.partials = require('./partials.js');
exports.api = require('./api.js');
