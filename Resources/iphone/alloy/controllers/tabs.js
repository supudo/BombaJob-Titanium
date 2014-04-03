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
    var __alloyId17 = [];
    $.__views.__alloyId18 = Alloy.createController("newest_offers", {
        id: "__alloyId18",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId18.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId19 = Alloy.createController("search_jobs", {
        id: "__alloyId19",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId19.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId20 = Alloy.createController("search_people", {
        id: "__alloyId20",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId20.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId21 = Alloy.createController("search", {
        id: "__alloyId21",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId21.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId22 = Alloy.createController("post_offer", {
        id: "__alloyId22",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId22.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId23 = Alloy.createController("settings", {
        id: "__alloyId23",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId23.getViewEx({
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
    __alloyId17.push($.__views.tbSync);
    $.__views.__alloyId24 = Alloy.createController("about", {
        id: "__alloyId24",
        __parentSymbol: __parentSymbol
    });
    __alloyId17.push($.__views.__alloyId24.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId17,
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