/**
 * Intel Social Timeline
 *
 * @module modules/projects.js
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