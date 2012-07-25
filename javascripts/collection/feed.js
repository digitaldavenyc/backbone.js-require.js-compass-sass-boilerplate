/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/feed.js
 * collection loads a static JSON file
 *
 * @param {use!backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {model/feed} collection data model
 */
define([
    'use!backbone',
    'model/feed'
],

    function(Backbone, Model){

        var FeedCollection = Backbone.Collection.extend({

            model: Model,
            url: "/dummy.json"

        });

        return FeedCollection;
    }
);