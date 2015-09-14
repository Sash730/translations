"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-translation');

  grunt.initConfig({
    translationDump: {
      reporting: {
        options: {
          ext: 'json',
          union: false,
          extend: true,
          pretty: true
        },
        src: ['./reporting/*'],
        dest: 'build/reporting'
      }
    }
  });

  grunt.registerTask('default', ['translationDump']);
};
