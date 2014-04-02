function Controller() {
    function doOpen() {
    }
    function startSync() {
        Alloy.Globals.LogThis("Sync start");
        sync_manager.startSync(syncFinished, syncError);
    }
    function syncFinished() {
        Alloy.Globals.LogThis("Sync finish");
        $.tbMenu.getActiveTab().window.close();
    }
    function syncError(e) {
        Alloy.Globals.LogThis("Sync error - " + e.error);
        alert(L("generic_error") + " " + e.error);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabs";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId10 = [];
    $.__views.__alloyId11 = Alloy.createController("newest_offers", {
        id: "__alloyId11",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId11.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId12 = Alloy.createController("search_jobs", {
        id: "__alloyId12",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId13 = Alloy.createController("search_people", {
        id: "__alloyId13",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId13.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId14 = Alloy.createController("search", {
        id: "__alloyId14",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId14.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId15 = Alloy.createController("post_offer", {
        id: "__alloyId15",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId15.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId16 = Alloy.createController("settings", {
        id: "__alloyId16",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId16.getViewEx({
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
    __alloyId10.push($.__views.tbSync);
    $.__views.__alloyId17 = Alloy.createController("about", {
        id: "__alloyId17",
        __parentSymbol: __parentSymbol
    });
    __alloyId10.push($.__views.__alloyId17.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId10,
        id: "tbMenu",
        allowUserCustomization: "false",
        navBarHidden: "false",
        tabsAtBottom: "true"
    });
    $.__views.tbMenu && $.addTopLevelView($.__views.tbMenu);
    doOpen ? $.__views.tbMenu.addEventListener("open", doOpen) : __defers["$.__views.tbMenu!open!doOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sync_manager = require("SyncManager");
    $.tbMenu.open();
    Alloy.Globals.navgroup = $.tbMenu;
    $.tbMenu.addEventListener("focus", function(e) {
        if (6 == e.index) {
            Alloy.Globals.LogThis("Sync press");
            $.acView.show();
            startSync();
        }
    });
    __defers["$.__views.tbMenu!open!doOpen"] && $.__views.tbMenu.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;