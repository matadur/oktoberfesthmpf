"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
        s3: {
            options: grunt.file.readJSON('s3.json'),
            dev: {
                // Files to be uploaded.
                upload: [
                    {
                      src: 'public/*.html',
                      dest: '/',
                      gzip: true
                    },
                    {
                      src: 'public/*.ico',
                      dest: '/',
                      gzip: false
                    },
                    {
                      src: 'public/*.png',
                      dest: '/',
                      gzip: false
                    },
                    {
                      src: 'public/css/*.css',
                      dest: '/css/',
                      gzip: true
                    },
                    {
                      src: 'public/js/*',
                      dest: '/js/',
                      gzip: true
                    },
                    {
                      src: 'public/js/vendor/*',
                      dest: '/js/vendor/',
                      gzip: true
                    },
                    {
                      src: 'public/img/*',
                      dest: '/img/',
                      gzip: false,
                      headers: {
                    	  'Cache-Control': 'max-age=86400000'
                      }
                    },
                    {
                      src: 'public/img/vendor/*',
                      dest: '/img/vendor/',
                      gzip: false
                    },
                    {
                      src: 'public/fonts/*',
                      dest: '/fonts/',
                      gzip: true
                    }
                ],
            }
        },
        recess: {
        	compile: {
        		src: ['public/css/main.less'],
        		dest: 'public/css/main.css',
        		options: {
        			compile: true
        		}
        	},
        	compress: {
        		src: ['public/css/main.less'],
        		dest: 'public/css/main.min.css',
        		options: {
        			compile: true,
        			compress: true
        		}
        	}
        },
        uglify: {
            dev: {
                options: {
                    compress: true
                },
                files: {
                    'public/js/main.min.js': ['public/js/vendor/jquery-1.10.1.js', 'public/js/main.js']
                }
            }
        },
        smushit: {
        	path: {
        		src: 'public/img'
        	}
        }
	});

	// Default task.
	grunt.registerTask('default', ['recess:compile', 'recess:compress', 'uglify']);

	grunt.loadNpmTasks('grunt-s3');
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-smushit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};