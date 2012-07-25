/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/projects.js
 * collection holds the projects list
 *
 * @param {use!backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {model/projects} project list data model
 */
define([
    'use!backbone',
    'model/projects'
],

    function(Backbone, ProjectsModel){

       var ProjectsCollection = Backbone.Collection.extend({

           model: ProjectsModel,

           initialize: function(){

           }
       });

       return new ProjectsCollection;
});