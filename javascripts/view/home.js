/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module view/home.js
 */
define([
    'backbone',
    'collection/twitter',
    'text!templates/twitter.html',
    'text!templates/home.html'
],
    function(Backbone, TwitterCollection, TwitterListTemplate, HomeTemplate){

    return Backbone.View.extend({

        initialize: function(){
            this.collection = new TwitterCollection();
        },

        render: function(){

            $("#page").html(HomeTemplate);
            this.collection.fetch({
               success: function(tweets){
                   $("#page").append(_.template(TwitterListTemplate, {tweets: tweets.models, _:_}));
               }
            });

        }
    });
});