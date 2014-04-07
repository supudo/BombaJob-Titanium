function Controller() {
    function startSync() {
        Ti.App.Properties.getBool("BJSettingInitSync", true) ? sync_manager.startSync(syncFinished, syncError) : syncFinished();
    }
    function syncFinished() {
        Alloy.createController("tabs").getView().open();
    }
    function syncError(e) {
        Alloy.Globals.LogThis(e.error);
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ L("retry_alertbox"), L("close_alertbox") ],
            message: void 0 != e.error ? e.error : "",
            title: L("generic_error")
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel ? syncFinished() : startSync();
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
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
    $.__views.index.add($.__views.acView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sync_manager = require("SyncManager");
    $.index.open();
    $.acView.show();
    startSync();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;