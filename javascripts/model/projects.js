/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module modules/projects.js
 * projects data model, default score of 10
 *
 */

define(['backbone'], function(){

    return Backbone.Model.extend({

        defaults: {
            score: 10
        },

        initialize: function(){

        }
    });

});