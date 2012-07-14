/**
 * Intel Social Timeline
 *
 * @module collection/feed.js
 * @param {use!backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {model/feed} feed model of data pull from backend service
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