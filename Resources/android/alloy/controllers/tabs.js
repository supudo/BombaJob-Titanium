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
    var __alloyId11 = [];
    $.__views.__alloyId12 = Alloy.createController("newest_offers", {
        id: "__alloyId12",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId13 = Alloy.createController("search_jobs", {
        id: "__alloyId13",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId13.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId14 = Alloy.createController("search_people", {
        id: "__alloyId14",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId14.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId15 = Alloy.createController("search", {
        id: "__alloyId15",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId15.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId16 = Alloy.createController("post_offer", {
        id: "__alloyId16",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId16.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId17 = Alloy.createController("settings", {
        id: "__alloyId17",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId17.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId18 = Alloy.createController("sync", {
        id: "__alloyId18",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId18.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId19 = Alloy.createController("about", {
        id: "__alloyId19",
        __parentSymbol: __parentSymbol
    });
    __alloyId11.push($.__views.__alloyId19.getViewEx({
        recurse: true
    }));
    $.__views.tbMenu = Ti.UI.createTabGroup({
        tabs: __alloyId11,
        id: "tbMenu",
        allowUserCustomization: "false",
        navBarHidden: "false",
        tabsAtBottom: "true"
    });
    $.__views.tbMenu && $.addTopLevelView($.__views.tbMenu);
    doOpen ? $.__views.tbMenu.addEventListener("open", doOpen) : __defers["$.__views.tbMenu!open!doOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tbMenu.open();
    __defers["$.__views.tbMenu!open!doOpen"] && $.__views.tbMenu.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;