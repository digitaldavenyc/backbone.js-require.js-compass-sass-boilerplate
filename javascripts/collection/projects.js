/**
 * Application Name
 *
 * @module collection/projects.js
 * @param {use!backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {model/projects}
 */
define(['use!backbone', 'model/projects'], function(Backbone, ProjectsModel){
   var ProjectsCollection = Backbone.Collection.extend({

       model: ProjectsModel,

       initialize: function(){

       }
   });

   return new ProjectsCollection;
});