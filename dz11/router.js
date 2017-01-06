var Controller = require('./controller.js');

//var Router
module.exports = {
    handle: function(route) {
        var routeName = route + 'Route';

        Controller[routeName]();
    }
};
