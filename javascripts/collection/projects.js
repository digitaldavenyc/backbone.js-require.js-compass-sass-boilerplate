/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/projects.js
 * collection holds the projects list
 *
 * @param {backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {model/projects} project list data model
 */
define(['backbone', 'model/projects'],

    function(Backbone, ProjectsModel){

    return Backbone.Collection.extend({

       model: ProjectsModel,

       initialize: function(){

       }
    });
});