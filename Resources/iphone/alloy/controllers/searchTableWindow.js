function Controller() {
    function doOpen() {
        var activity = $.win.activity;
        activity.actionBar.displayHomeAsUp = true;
        activity.actionBar.onHomeIconItemSelected = function() {
            $.win.close();
        };
        activity.onCreateOptionsMenu = function(e) {
            e.menu.add({
                title: "Table Search",
                icon: Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png",
                actionView: search,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
            });
        };
        activity.invalidateOptionsMenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchTableWindow";
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
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    var __alloyId24 = [];
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        filter: "Apple",
        id: "__alloyId25"
    });
    __alloyId24.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Apple",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        filter: "Banana",
        id: "__alloyId27"
    });
    __alloyId24.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Banana",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        filter: "Orange",
        id: "__alloyId29"
    });
    __alloyId24.push($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Orange",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        filter: "Raspberry",
        id: "__alloyId31"
    });
    __alloyId24.push($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Raspberry",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.tableview = Ti.UI.createTableView({
        top: "10dp",
        data: __alloyId24,
        id: "tableview",
        searchAsChild: "false",
        filterAttribute: "filter"
    });
    $.__views.win.add($.__views.tableview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var search = Alloy.createController("searchView").getView();
    $.tableview.search = search;
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;