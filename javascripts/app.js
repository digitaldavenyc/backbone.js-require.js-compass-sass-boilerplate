/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module app.js - load the app module and pass it to our definition function
 */
define(['backbone', 'router'], function(Backbone, Router){

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    }

});