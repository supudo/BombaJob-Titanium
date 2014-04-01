function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "other/modalWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        layout: "vertical",
        modal: true,
        id: "win",
        title: "Modal Window"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "See the comments in other/modalWindow.js for more info.",
        id: "__alloyId23"
    });
    $.__views.win.add($.__views.__alloyId23);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;