function Controller() {
    function doOpen() {
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabs";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId13 = [];
    $.__views.__alloyId14 = Alloy.createController("newest_offers", {
        id: "__alloyId14",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId14.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId15 = Alloy.createController("search_jobs", {
        id: "__alloyId15",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId15.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId16 = Alloy.createController("search_people", {
        id: "__alloyId16",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId16.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId17 = Alloy.createController("search", {
        id: "__alloyId17",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId17.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId18 = Alloy.createController("post_offer", {
        id: "__alloyId18",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId18.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId19 = Alloy.createController("settings", {
        id: "__alloyId19",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId19.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId20 = Alloy.createController("sync", {
        id: "__alloyId20",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId20.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId21 = Alloy.createController("about", {
        id: "__alloyId21",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId21.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId13,
        id: "tbMenu",
        allowUserCustomization: "false"
    });
    $.__views.tbMenu && $.addTopLevelView($.__views.tbMenu);
    doOpen ? $.__views.tbMenu.addEventListener("open", doOpen) : __defers["$.__views.tbMenu!open!doOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tabgroup = $.tabs;
    $.tbMenu.open();
    Alloy.Globals.navgroup = $.tbMenu;
    __defers["$.__views.tbMenu!open!doOpen"] && $.__views.tbMenu.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;