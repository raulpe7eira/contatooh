// contatooh/Gruntfile.js

module.exports = function(grunt) {

	grunt.initConfig({

		clean: {
			dist: {
				src: 'dist'
			}
		},

		copy: {
			project: {
				expand: true,
				cwd: '.',
				src: ['**', '!gruntfile.js', '!package.json', '!bower.json'],
				dest: 'dist'
			}
		},

		useminPrepare: {
			options: {
				root: 'dist/public',
				dest: 'dist/public'
			},
			html: 'dist/app/views/**/*.ejs'
		},

		ngAnnotate: {
			scripts: {
				expand: true,
				src: ['dist/public/js/**/*.js']
			}
		},

		usemin: {
			html: 'dist/app/views/**/*.ejs'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('dist', ['clean', 'copy']);
	grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']);

	grunt.registerTask('default', ['dist', 'minifica']);

};