/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module modules/projects.js
 * projects data model, default score of 10
 *
 */

define(['use!backbone'], function(){
    var ProjectsModel = Backbone.Model.extend({
        defaults: {
            score: 10
        },
        initialize: function(){

        }
    });

    return ProjectsModel;
});