/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/users.js
 * collection holds the user list
 *
 * @param {Backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 * @param {Users} data model that holds each users for collection
 */

define(['backbone', 'model/users'],
    function(Backbone, UsersModel){

    return Backbone.Collection.extend({

        model: UsersModel,

        initialize: function(){

        }
    });
});