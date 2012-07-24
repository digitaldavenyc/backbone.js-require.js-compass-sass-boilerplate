/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module router.js - psuedo view controller, renders different views
 */

define([
    'use!backbone',
    'view/home',
    'view/projects',
    'view/users',
    'view/feed'
], function(Backbone, HomeView, ProjectView, UserView, FeedView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'projects': 'showProjects',
            'users': 'showUsers',
            'feed': 'showFeed',
            '*actions': 'defaultAction'
        },
        showProjects: function(){
            ProjectView.render();
        },
        showUsers: function(){
            UserView.render();
        },
        showFeed: function(){
            FeedView.render();
        },
        defaultAction: function(actions){
            HomeView.render();
        }
    });

    var initialize = function(){
        var appRouter = new AppRouter;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
});