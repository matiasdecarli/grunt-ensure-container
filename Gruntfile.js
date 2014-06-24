/*
 * grunt-ensure-container
 * https://github.com/matiasdecarli/grunt-ensure-container
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    'ensure_container': {      
        options: {
          containers:['static1','uploads1']
        },        
      }      
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['ensure_container']);

};
