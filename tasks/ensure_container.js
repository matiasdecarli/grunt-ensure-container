/*
 * grunt-ensure-container
 * https://github.com/matiasdecarli/grunt-ensure-container
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';

var azure = require('azure');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks


  grunt.registerTask('ensure_container', 'Grunt task to ensure the container on Windows Azure exists', function() {
      var done = this.async();
      ensureContainer(this.options(),done);          
  });  

  function ensureContainer(options){
    options['containers'].forEach(function(item){
        azure.createBlobService().createContainerIfNotExists(item, {publicAccessLevel : 'blob'}, function(error,response){
            if (error) throw error;
            if (response){
                console.log('Container ' + item + ' was created');
            }            
        });     
    });    
  }

};
