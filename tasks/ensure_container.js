/*
 * grunt-ensure-container
 * https://github.com/matiasdecarli/grunt-ensure-container
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';

var azure = require('azure'),
    async = require('async');

module.exports = function(grunt) {

  grunt.registerTask('ensure_container', 'Grunt task to ensure the container on Windows Azure exists', function() {
      var options = this.options();
      var done = this.async();
      
      async.forEach(options['containers'],function(item,next){        
        azure.createBlobService().createContainerIfNotExists(item, {publicAccessLevel : 'blob'}, function(error,response){
            if (error) throw error;
            if (response){
                console.log('Container ' + item + ' was created');
            }
            else{
                console.log('Container ' + item + ' already exists');
            }  
            next();          
        });               
      },function(error) {
        done(!error);
      });
            
  });  

};
