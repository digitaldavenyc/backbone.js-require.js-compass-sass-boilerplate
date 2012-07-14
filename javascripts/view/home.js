/**
 * Application Name
 *
 * @module view/home/main.js
 */
define([
    'use!backbone',
    'collection/twitter',
    'text!/templates/twitter/list.html',
    'text!/templates/home/main.html'
], function(Backbone, TwitterCollection, TwitterListTemplate, HomeTemplate){
    var HomeView = Backbone.View.extend({
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
    return new HomeView;
});