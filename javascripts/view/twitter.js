/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module view/twitter
 */
define([
    'use!backbone',
    'collection/twitter'

], function(Backbone, TweetCollection){
    var TweetView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render');
            // create a collection
        }
    });

    return TweetView;
});