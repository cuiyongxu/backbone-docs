//message.js
define(function(require, exports, module) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');

    var Message = Backbone.Model.extend({
        urlRoot: '/message',
    });

    var Messages = Backbone.Collection.extend({
        url: '/message',
        model: Message,
    });

    var MessageView = Backbone.View.extend({
        tagName:  "div class='comment'",
        templ: _.template($('#message-template').html()),

        // 渲染列表页模板
        render: function() {
            $(this.el).html(this.templ(this.model.toJSON()));
            return this;
        },
    });
    module.exports = {
        "Messages": Messages,
        "Message": Message,
        "MessageView": MessageView,
    }
});