/**
 * Intel Social Timeline
 *
 * @module app.js - load the app module and pass it to our definition function
 */
define(['use!backbone', 'router'], function(Backbone, Router){

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    }

});