require.config({
    // ref: http://www.ruanyifeng.com/blog/2012/11/require_js.html
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../../lib/jquery',
        underscore: '../../lib/underscore',
        backbone: '../../lib/backbone'
    }
});

require(['jquery', 'backbone', 'app'], function($, Backbone, appModel) {
    var model = new appModel();

    model.set({"name":"崔永旭"})
});