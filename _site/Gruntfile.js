module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jekyll: {
            dist: {
                src: '.',
                dest: './_site/'
            } 
        },

        clean: {
            build: ['_site/'],
            afterBuild: [
                '_site/js/click.js', 
                '_site/js/onload.js', 
                '_site/js/parallax.js', 
                '_site/js/scroll.js', 
                '_site/css/main.css', 
                '_site/css/main.prefixed.css'
            ]
        },

        autoprefixer: {
            single_file: {
                src: './_site/css/main.css',
                dest: './_site/css/main.prefixed.css'
            }
        },

        cssmin: {
			minify: {
				expand: true,
				src: ['_site/css/main.prefixed.css'],
				dest: './',
                ext: '.min.css'
			}
        },

		rewrite: {
			htmlFiles: {
				src: '_site/**/*.html',
				editor: function(contents, filePath){
					var newContents = contents.replace(/main\.css/, "main.min.css");
					
					newContents = newContents.replace(/.+onload\.js+/, "");
					newContents = newContents.replace(/.+click\.js+/, "");
					newContents = newContents.replace(/.+parallax\.js+/, "");

					newContents = newContents.replace(/scroll\.js/, "global\.min\.js");
 
					return newContents;
				}
			}
		},

        jshint: {
            all: ['Gruntfile.js', './js/*.js']
        },

        uglify: {
            build: {
                src: ['_site/js/*.js'],
                dest: '_site/js/global.min.js'
            }   
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '_site/index.html': '_site/index.html',
                    '_site/portfolio/index.html': '_site/portfolio/index.html',
                    '_site/blog/index.html': '_site/blog/index.html',
                    '_site/tools/index.html': '_site/tools/index.html',
                    '_site/resume/index.html': '_site/resume/index.html'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    base: './_site'
                }
            }
        },

        open: {
            server: {
                path: 'http://localhost:4000'
            }
        },

        watch: {
            livereload: {
                files: [
                    './*.md',
                    './*.html',
                    './_posts/*.md',
                    './_includes/*.html',
                    './_layouts/*.html',
                    './_sass/*.scss',
                    './css/*.scss',
                    './js/*.js',
                    './images/*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['jekyll'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-rewrite');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svgstore');

    grunt.registerTask('server', [
            'jekyll',
            'connect:server',
            'open',
            'watch'
    ]);

    grunt.registerTask('build', [
            'clean:build',
            'jekyll',

            'autoprefixer',
            'cssmin',

            'jshint',
            'uglify',

            'rewrite:htmlFiles',
            'htmlmin',

            'clean:afterBuild'
    ]);

};
