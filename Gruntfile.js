module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		express: {
			all: {
				options: {
					port: 9000,
					hostname: '0.0.0.0',
					bases: [__dirname],
					livereload: true
				}
			}
		},
		open: {
			all: {
				path: 'http://0.0.0.0:<%=express.all.options.port%>'
			}
		},
		watch: {
	      all: {
	        files: [
	          '**/*.html',
	          '**/*.js',
	          '**/*.less',
	          '**/*.coffee',
	          'mockup-data/**/*.json'
	        ],
	        tasks: [
	        	'build'
	        ]
	      },
	      options: {
	        livereload: true
	      }
	    },
	    less: {
	    	options: {
	    		paths: ['css/mod']
	    	},
	    	src: {
	    		expand: true,
	    		cwd: 'css/mod',
	    		src: '**/*.less',
	    		dest: 'css/mod',
	    		ext: '.css'
	    	}
	    }
	});
	//grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['less']);
	grunt.registerTask('default', ['build']);
	grunt.registerTask('server', ['build', 'express', 'open', 'watch']);
}