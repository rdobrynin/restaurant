module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'dest/css/main.css': [ // в эту папку получиться скомпелированный и сконкатенированный css файл готовый для продакшена
                        'src/sass/style.scss'
                    ]
                }
            }
        },


        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "src/js/build.js", // главный файл с описанием конфигурации и билда require.js
                    baseUrl: "src/js", // папка где находятся все js файлы
                    name: 'main', // название файла запускающего приложение
                    include: ['build'], // вставить в выходящий файл и build.js
                    out: "dest/js/main.min.js" // выходящий минифицированный и конкатенированный файл готовые для продакшена
                }
            }
        },

        watch: {
            scripts: {
                files: 'src/js/*.js',
                tasks: ['requirejs'] // и запускать такую задачу при их изменении
            },
            css: {
                files: 'src/sass/*.scss', // следить за изменениями любых файлов с разширениями .scss
                tasks: ['sass'] // и запускать такую задачу при их изменении
            }
        }

    });

    //погружаем все необходимые модули
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    //забиваем в задачу по умолчению все наши задачи
    grunt.registerTask('default', ['sass', 'requirejs', 'watch']);
};