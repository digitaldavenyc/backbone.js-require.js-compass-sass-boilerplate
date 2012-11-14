/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module view/feed/list.js
 */
define([
    'backbone',
    'text!templates/feed.html',
    'collection/feed'],

    function(Backbone, FeedTemplate, FeedCollection){

        return Backbone.View.extend({

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
    }
);