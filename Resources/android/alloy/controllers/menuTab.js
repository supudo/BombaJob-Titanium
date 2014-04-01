function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId17 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        layout: "vertical",
        title: "Menu Items",
        id: "__alloyId17"
    });
    $.__views.__alloyId18 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Menu Created In Markup",
        controller: "menuMarkupWindow",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    try {
        $.__views.__alloyId18.addEventListener("click", Alloy.Globals.openSubWindow);
    } catch (e) {
        __defers["$.__views.__alloyId18!click!Alloy.Globals.openSubWindow"] = true;
    }
    $.__views.__alloyId19 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Menu Created Dynamically",
        controller: "menuDynamicWindow",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    try {
        $.__views.__alloyId19.addEventListener("click", Alloy.Globals.openSubWindow);
    } catch (e) {
        __defers["$.__views.__alloyId19!click!Alloy.Globals.openSubWindow"] = true;
    }
    $.__views.menuTab = Ti.UI.createTab({
        window: $.__views.__alloyId17,
        title: "Menu Items",
        id: "menuTab"
    });
    $.__views.menuTab && $.addTopLevelView($.__views.menuTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId18!click!Alloy.Globals.openSubWindow"] && $.__views.__alloyId18.addEventListener("click", Alloy.Globals.openSubWindow);
    __defers["$.__views.__alloyId19!click!Alloy.Globals.openSubWindow"] && $.__views.__alloyId19.addEventListener("click", Alloy.Globals.openSubWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;