/**
 * Application Name
 *
 * @module view/feed/list.js
 */
define([
    'use!backbone',
    'text!/templates/feed.html',
    'collection/feed'
], function(Backbone, FeedTemplate, FeedCollection){
    var FeedView = Backbone.View.extend({
        el: $("#scroll"),
        initialize: function(){
            this.collection = new FeedCollection();
        },
        render: function(){
            this.collection.fetch({
                success: function(data){
                    $("#page").html(_.template(FeedTemplate, {feed: data.models, _:_}));
                }
            });
        }
    });
    return new FeedView;
});