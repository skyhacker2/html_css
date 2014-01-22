module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
	      all: {
	        files: [
	          '**/*.html',
	          '**/*.js',
	          '**/*.css',
	          '**/*.less',
	          '**/*.coffee',
	          'mockup-data/**/*.json'
	        ]
	      },
	      options: {
	        livereload: true
	      }
	    }
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
}