/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/users.js
 * collection holds the user list
 *
 * @param {model/users} data model that holds each users for collection
 */

define([
    'use!backbone',
    'model/users'
],
    function(Backbone, UsersModel){

        var UsersCollection = Backbone.Collection.extend({

            model: UsersModel,

            initialize: function(){

            }
        });

        return new UsersCollection;
});