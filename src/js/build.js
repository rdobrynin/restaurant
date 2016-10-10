require.config({
    deps: ['main'],
    baseUrl: 'src/js',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        "bootstrap" : '../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        "domReady": '../../bower_components/domReady/domReady'
    }
});
