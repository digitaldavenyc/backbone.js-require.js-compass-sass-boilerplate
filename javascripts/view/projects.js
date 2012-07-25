/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module view/projects.js
 */
define([
    'use!backbone',
    'collection/projects',
    'text!/templates/projects.html'
],
    function(Backbone, ProjectsCollection, ProjectListTemplate){

        var ProjectListView = Backbone.View.extend({

            initialize: function(){
                this.collection = ProjectsCollection;
                this.collection.bind("add", this.exampleBind);
                this.collection = ProjectsCollection.add({ name: "Twitter" });
                this.collection = ProjectsCollection.add({ name: "Facebook" });
                this.collection = ProjectsCollection.add({ name: "Myspace", score: 20 });
            },

            exampleBind: function( model ){
                //console.log(model);
            },

            render: function(){
                var data = {
                    projects: this.collection.models,
                    _: _
                };
                var compiledTemplate = _.template( ProjectListTemplate, data );
                $("#page").html( compiledTemplate );
            }

        });

        return new ProjectListView;
});