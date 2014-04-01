function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchTab";
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
        id: "win",
        title: "Search"
    });
    $.__views.__alloyId26 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Search a TableView",
        controller: "searchTableWindow",
        id: "__alloyId26"
    });
    $.__views.win.add($.__views.__alloyId26);
    try {
        $.__views.__alloyId26.addEventListener("click", Alloy.Globals.openSubWindow);
    } catch (e) {
        __defers["$.__views.__alloyId26!click!Alloy.Globals.openSubWindow"] = true;
    }
    $.__views.searchTab = Ti.UI.createTab({
        window: $.__views.win,
        title: "Search",
        id: "searchTab"
    });
    $.__views.searchTab && $.addTopLevelView($.__views.searchTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId26!click!Alloy.Globals.openSubWindow"] && $.__views.__alloyId26.addEventListener("click", Alloy.Globals.openSubWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;