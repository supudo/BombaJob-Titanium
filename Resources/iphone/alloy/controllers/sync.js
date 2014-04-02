function Controller() {
    function startSync() {
        sync_manager.startSync(syncFinished, syncError);
    }
    function syncFinished() {
        Alloy.Globals.navgroup.setActiveTab(0);
    }
    function syncError(e) {
        Alloy.Globals.LogThis(e.error);
        alert(L("generic_error") + " " + e.error);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sync";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId12 = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("syncagain"),
        backButtonTitle: "",
        tabBarHidden: "true",
        id: "__alloyId12"
    });
    startSync ? $.__views.__alloyId12.addEventListener("focus", startSync) : __defers["$.__views.__alloyId12!focus!startSync"] = true;
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
    $.__views.__alloyId12.add($.__views.acView);
    $.__views.tbSync = Ti.UI.createTab({
        window: $.__views.__alloyId12,
        id: "tbSync",
        title: L("syncagain"),
        icon: "tb_syncagain.png"
    });
    $.__views.tbSync && $.addTopLevelView($.__views.tbSync);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sync_manager = require("SyncManager");
    $.acView.show();
    __defers["$.__views.__alloyId12!focus!startSync"] && $.__views.__alloyId12.addEventListener("focus", startSync);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;