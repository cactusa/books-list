module.exports = function(grunt) {
    'use strict';

    // load grunt tasks
    require('load-grunt-tasks')(grunt);

    // project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        jshint: {
            files: [
                'Gruntfile.js',
                'src/js/**/*.js'
            ],
            options: {
                jshintrc: true
            },
        },

        uglify: {
            main: {
                options: {
                    mangle: true
                },
                files: {
                    'public/js/main.js': [
                        'src/js/main.js',
                        'src/js/modules/**/*.js'
                    ]
                },
            },
        },

        sass: {
            options: {
                style: 'compressed',
                precision: 5
            },
            dist: {
                files: {
                    'public/css/main.css': 'src/scss/main.scss',
                },
            },
        },

        clean: {
            public: ['public/**']
        },

        copy: {
            app: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['index.html'],
                        dest: 'public'
                    },
                    {
                        expand: true,
                        cwd: 'src/js',
                        src: ['**'],
                        dest: 'public/js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/mustache/mustache.min.js'],
                        dest: 'public/js/lib/mustache.min.js'
                    },
                    {
                        expand: false,
                        src: ['node_modules/requirejs/require.js'],
                        dest: 'public/js/lib/require.js'
                    },
                ]
            },
        },

        watch: {
            javascripts: {
                files: [
                    'Gruntfile.js',
                    'src/js/**/*.js',
                ],
                tasks: [
                    'jshint',
                    'copy'
                ],
            },
            sass: {
                files: [
                    'src/scss/**/*.scss',
                ],
                tasks: [
                    'sass'
                ],
            },
            html: {
                files: [
                    'src/**/*.html'
                ],
                tasks: [
                    'copy'
                ],
            }
        }
    });

    // Task definitions:
    grunt.registerTask('default', [
        'test',
        'clean',
        'copy',
        'build'
    ]);

    grunt.registerTask('dev', [
        'test',
        'clean',
        'copy',
        'build',
        'watch'
    ]);

    grunt.registerTask('build', [
        'sass'
    ]);

    grunt.registerTask('test', [
        'jshint',
    ]);
};
