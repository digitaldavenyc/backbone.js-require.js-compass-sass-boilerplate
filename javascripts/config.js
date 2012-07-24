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
        'use': 'libs/use.min',
        'text': 'libs/text',
        'jquery': 'libs/jquery-1.7.1.min',
        'underscore': 'libs/underscore-min',
        'backbone': 'libs/backbone-min',
        'isotope': 'libs/jquery.isotope.min'
    },

    //use is a library that includes all depenendencies and attaches them to Backbone whenever it is requested.
    use: {
        backbone: {
            deps: ['underscore', 'jquery'],
            attach: 'Backbone'
        }
    }
});