module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        expr: true
      },
      demoJs: {
        src: ['demo/js/*.js']
      },
      js: {
        src: ['lib/**/*.js', '!lib/**/*.min.js']
      },
      testJs: {
        src: [ 'test/**/*.js']
      },
      gruntfile: {
        src: ['Gruntfile.js']
      }
    },
    mochaTest: {
      dev: {
        options: {
          reporter: 'spec',
          clearRequireCache: true // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/**/*.spec.js']
      }
    },
    uglify: {
      options: {
        mangle: false,
        quoteStyle: 3 // preserve original quotation marks
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'lib',
          rename: function(dest, src) {
            return dest + '/' + src.replace('.js','.min.js');
          }
        }]
      }
    },
    watch: {
      js: {
        files: ['lib/**/*.js', '!lib/**/*.min.js'],
        tasks: ['jshint:js', 'mochaTest', 'uglify:dev']
      },
      demoJs: {
        files: ['demo/js/*.js'],
        tasks: ['jshint:demoJs']
      },
      gruntfileJs: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },
      testJs: {
        files: ['test/**/*.js'],
        tasks: ['jshint:testJs', 'mochaTest']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'jshint',
    'mochaTest',
    'uglify',
    'watch'
  ]);

};