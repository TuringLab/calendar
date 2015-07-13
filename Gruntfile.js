module.exports = function(grunt) {

  // load injector and bower install
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-bower-install');

  // Project configuration.
  grunt.initConfig({

    injector: {
      options: {},
      local_dependencies: {
        files: {
          'app/index.html': ['app/**/*.js', 'app/**/*.css'],
        }
      }
    },

    bowerInstall: {
      target: {
     
        // Point to the files that should be updated when 
        // you run `grunt bower-install` 
        src: [
          'app/index.html'   // .html support... 
        ],
     
        // Optional: 
        // --------- 
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },

    serve: {
        options: {
            port: 9000,
            path: './app'
        }
    }

  });

  // // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['bowerInstall','injector']);

};