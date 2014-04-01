function Controller() {
    function doOpen(e) {
        var actionBar = e.source.activity.actionBar;
        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            e.source.activity.invalidateOptionsMenu();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuMarkupWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuMarkupWindow = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        title: "Markup Menu",
        id: "menuMarkupWindow"
    });
    $.__views.menuMarkupWindow && $.addTopLevelView($.__views.menuMarkupWindow);
    doOpen ? $.__views.menuMarkupWindow.addEventListener("open", doOpen) : __defers["$.__views.menuMarkupWindow!open!doOpen"] = true;
    $.__views.__alloyId13 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Check out the menu at top-right, or via the menu hardware button if you're running an old, crusty phone.",
        id: "__alloyId13"
    });
    $.__views.menuMarkupWindow.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menuMarkupWindow!open!doOpen"] && $.__views.menuMarkupWindow.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;