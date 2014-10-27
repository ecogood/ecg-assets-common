'use strict';


module.exports = function(grunt) {

  // Configurable paths for the application
  var appConfig = {
    assets: 'assets/'
  };

  // Project configuration.
  grunt.initConfig({

    // Project settings
    dir: appConfig,

    sass: {
      options: {
        sourceMap: false
      },
      ecg: {
        files: {
          '<%= dir.assets %>/css/ecg.css': '<%= dir.assets %>/sass/ecg.scss'
        }
      },
      general: {
        files: {
          '<%= dir.assets %>/css/general.css': '<%= dir.assets %>/sass/general.scss'
        }
      }
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'],
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

  /* Load tasks */
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-bump');


  grunt.registerTask('default', [
    'sass'
  ]);

};