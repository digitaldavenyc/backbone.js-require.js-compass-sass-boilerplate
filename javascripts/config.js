/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module config.js loads third-party libraries before starting require.js
 */

require.config({

    //main.js starts the application
    deps: ['main'],

    //define libraries and their paths
    paths: {
        'jquery': 'libs/jquery-1.7.1.min',
        'underscore': 'libs/underscore-min',
        'backbone': 'libs/backbone-min',
        'text': 'libs/text'
    }

});