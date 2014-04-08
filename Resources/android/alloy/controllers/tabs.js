function Controller() {
    function doOpen() {
        var activity = $.tbMenu.activity;
        activity.actionBar && (activity.actionBar.title = L("app_name"));
        activity.onCreateOptionsMenu = function(e) {
            var menuItem = e.menu.add({
                title: "Add Task",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: Ti.Android.R.drawable.ic_menu_share ? Ti.Android.R.drawable.ic_menu_share : "my_search.png"
            });
            menuItem.addEventListener("click", function() {
                var txt = "Alloy Action Jackson. It's Time for Action. https://github.com/adampax/AlloyActionJackson";
                var intent = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
                    type: "text/plain"
                });
                intent.putExtra(Ti.Android.EXTRA_TEXT, txt);
                intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
                try {
                    Ti.Android.currentActivity.startActivity(intent);
                } catch (ex) {
                    Ti.UI.createNotification({
                        message: "Complete action using -- Hey, install some sharing apps!"
                    }).show();
                }
            });
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabs";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId29 = [];
    $.__views.__alloyId30 = Alloy.createController("newest_offers", {
        id: "__alloyId30",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId30.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId31 = Alloy.createController("search_jobs", {
        id: "__alloyId31",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId31.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId32 = Alloy.createController("search_people", {
        id: "__alloyId32",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId32.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId33 = Alloy.createController("search", {
        id: "__alloyId33",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId33.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId34 = Alloy.createController("post_offer", {
        id: "__alloyId34",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId34.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId35 = Alloy.createController("settings", {
        id: "__alloyId35",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId35.getViewEx({
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
    __alloyId29.push($.__views.tbSync);
    $.__views.__alloyId36 = Alloy.createController("about", {
        id: "__alloyId36",
        __parentSymbol: __parentSymbol
    });
    __alloyId29.push($.__views.__alloyId36.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId29,
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
    $.tbMenu.addEventListener("focus", function(e) {
        6 == e.index && Alloy.Globals.LogThis("Sync press");
    });
    __defers["$.__views.tbMenu!open!doOpen"] && $.__views.tbMenu.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;