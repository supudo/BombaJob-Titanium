function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "other/otherTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        layout: "vertical",
        id: "win"
    });
    $.__views.__alloyId28 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Modify Stuff on an Opened Window",
        controller: "other/modifyActionBar",
        id: "__alloyId28"
    });
    $.__views.win.add($.__views.__alloyId28);
    try {
        $.__views.__alloyId28.addEventListener("click", Alloy.Globals.openSubWindow);
    } catch (e) {
        __defers["$.__views.__alloyId28!click!Alloy.Globals.openSubWindow"] = true;
    }
    $.__views.__alloyId29 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Open Modal Window with Custom Theme",
        controller: "other/modalWindow",
        id: "__alloyId29"
    });
    $.__views.win.add($.__views.__alloyId29);
    try {
        $.__views.__alloyId29.addEventListener("click", Alloy.Globals.openSubWindow);
    } catch (e) {
        __defers["$.__views.__alloyId29!click!Alloy.Globals.openSubWindow"] = true;
    }
    $.__views.otherTab = Ti.UI.createTab({
        window: $.__views.win,
        title: "Other Stuff",
        id: "otherTab"
    });
    $.__views.otherTab && $.addTopLevelView($.__views.otherTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId28!click!Alloy.Globals.openSubWindow"] && $.__views.__alloyId28.addEventListener("click", Alloy.Globals.openSubWindow);
    __defers["$.__views.__alloyId29!click!Alloy.Globals.openSubWindow"] && $.__views.__alloyId29.addEventListener("click", Alloy.Globals.openSubWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;