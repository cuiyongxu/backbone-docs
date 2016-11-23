// app.js
define(['jquery', 'backbone'], function ($, Backbone) {
    var appModel = Backbone.Model.extend({
        initialize: function () {
            this.bind("change:name", function () {
                var name = this.get("name");
                console.log("name属性修改为:" + name)
            })
        },
        default: {
            name: "张三"
        }
        // blabla..bla
    });
    return appModel;
});