"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
	  s3: {
		options: {
		  key: '',
		  secret: '',
		  bucket: 'oktoberfesthmpf',
		  access: 'public-read'
		},
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
			  src: 'public/css/*',
			  dest: '/css/',
			  gzip: true
			},
			{
			  src: 'public/js/*',
			  dest: '/js/',
			  gzip: true
			},
			{
			  src: 'public/img/*',
			  dest: '/img/',
			  gzip: false
			}
		  ],
		}
	  }
	});

	// Default task.
	grunt.registerTask('default', ['s3']);

	grunt.loadNpmTasks('grunt-s3');
};