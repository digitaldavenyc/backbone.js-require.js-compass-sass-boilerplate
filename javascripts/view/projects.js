/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module view/projects.js
 */
define([
    'backbone',
    'collection/projects',
    'text!templates/projects.html'],

    function(Backbone, ProjectsCollection, ProjectListTemplate){

        return Backbone.View.extend({

            initialize: function(){
                this.collection = new ProjectsCollection();
                this.collection.bind("add", this.exampleBind);
                this.collection.add({ name: "Twitter" });
                this.collection.add({ name: "Facebook" });
                this.collection.add({ name: "Myspace", score: 20 });
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
    }
);