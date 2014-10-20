'use strict';


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'https://github.com/ecogood/ecg-assets-common.git',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
      }
    }
  });

  // Load the plugin that provides the 'uglify' task.
  grunt.loadNpmTasks('grunt-bump');

};