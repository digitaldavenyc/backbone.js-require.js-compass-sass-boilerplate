/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module router.js - psuedo view controller, renders different views
 */

define([
    'backbone',
    'view/home',
    'view/projects',
    'view/users',
    'view/feed'
], function(Backbone, HomeView, ProjectView, UserView, FeedView){

    var home = new HomeView();
    var project = new ProjectView();
    var users = new UserView();
    var feed = new FeedView();

    var AppRouter = Backbone.Router.extend({
        routes: {
            'projects': 'showProjects',
            'users': 'showUsers',
            'feed': 'showFeed',
            '*actions': 'defaultAction'
        },
        showProjects: function(){
            project.render();
        },
        showUsers: function(){
            users.render();
        },
        showFeed: function(){
            feed.render();
        },
        defaultAction: function(actions){
            home.render();
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