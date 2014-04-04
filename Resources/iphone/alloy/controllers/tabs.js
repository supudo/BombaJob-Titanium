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
    var __alloyId27 = [];
    $.__views.__alloyId28 = Alloy.createController("newest_offers", {
        id: "__alloyId28",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId28.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId29 = Alloy.createController("search_jobs", {
        id: "__alloyId29",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId29.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId30 = Alloy.createController("search_people", {
        id: "__alloyId30",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId30.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId31 = Alloy.createController("search", {
        id: "__alloyId31",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId31.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId32 = Alloy.createController("post_offer", {
        id: "__alloyId32",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId32.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId33 = Alloy.createController("settings", {
        id: "__alloyId33",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId33.getViewEx({
        recurse: true
    }));
    $.__views.winSync = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "winSync",
        title: L("syncagain"),
        backButtonTitle: "",
        tabBarHidden: "true"
    });
    $.__views.acView = Ti.UI.createActivityIndicator({
        verticalAlign: "center",
        color: "#df9368",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        id: "acView",
        message: L("loading")
    });
    $.__views.winSync.add($.__views.acView);
    $.__views.tbSync = Ti.UI.createTab({
        window: $.__views.winSync,
        id: "tbSync",
        title: L("syncagain"),
        icon: "tb_syncagain.png"
    });
    __alloyId27.push($.__views.tbSync);
    $.__views.__alloyId34 = Alloy.createController("about", {
        id: "__alloyId34",
        __parentSymbol: __parentSymbol
    });
    __alloyId27.push($.__views.__alloyId34.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId27,
        id: "tbMenu",
        allowUserCustomization: "false",
        navBarHidden: "false",
        tabsAtBottom: "true"
    });
    $.__views.tbMenu && $.addTopLevelView($.__views.tbMenu);
    doOpen ? $.__views.tbMenu.addEventListener("open", doOpen) : __defers["$.__views.tbMenu!open!doOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("SyncManager");
    $.tbMenu.open();
    Alloy.Globals.navgroup = $.tbMenu;
    $.tbMenu.addEventListener("focus", function(e) {
        6 == e.index && Alloy.Globals.LogThis("Sync press");
    });
    __defers["$.__views.tbMenu!open!doOpen"] && $.__views.tbMenu.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;