'use strict';

// # Config/Tasks
// Added test comments to test jenkins plungin
// All Grunt tasks are now stored in /grunt.
// registerTask has been replaced by /grunt/aliases.js
//
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  ngtemplates: {
		options: {
			module: 'myTmoApp.loginModule',
		},
		dist: {
			src: [
				'templates/**.html'
			],
			dest: 'templatesjs/templates.js'
		}
	},
	
	concat: {
    options: {
      separator: '',
    },
    dist: {
      src: ['login-module-config.js','templatesjs/templates.js'],
      dest: 'release/login-module-config.js'
    },
  },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['ngtemplates','concat']);
};
