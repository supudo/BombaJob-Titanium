function Controller() {
    function doOpen() {
        activity = $.win.activity;
    }
    function doChangeTitle() {
        if (activity.actionBar) {
            activity.actionBar.title = "New Title " + (0 === titleCount ? "" : titleCount);
            titleCount++;
        }
    }
    function doToggleUpArrow() {
        if (activity.actionBar) if (upArrow) {
            activity.actionBar.displayHomeAsUp = false;
            activity.actionBar.onHomeIconItemSelected = null;
        } else {
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.win.close();
            };
        }
        upArrow = !upArrow;
    }
    function doToggleActionBar() {
        activity.actionBar && (actionDisplayed ? activity.actionBar.hide() : activity.actionBar.show());
        actionDisplayed = !actionDisplayed;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "other/modifyActionBar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        id: "win",
        title: "Default Title"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId24"
    });
    $.__views.win.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Change Title",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    doChangeTitle ? $.__views.__alloyId25.addEventListener("click", doChangeTitle) : __defers["$.__views.__alloyId25!click!doChangeTitle"] = true;
    $.__views.__alloyId26 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Toggle Up Arrow",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    doToggleUpArrow ? $.__views.__alloyId26.addEventListener("click", doToggleUpArrow) : __defers["$.__views.__alloyId26!click!doToggleUpArrow"] = true;
    $.__views.__alloyId27 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Toggle Action Bar",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    doToggleActionBar ? $.__views.__alloyId27.addEventListener("click", doToggleActionBar) : __defers["$.__views.__alloyId27!click!doToggleActionBar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var titleCount = 0;
    var upArrow = false;
    var actionDisplayed = true;
    var activity;
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId25!click!doChangeTitle"] && $.__views.__alloyId25.addEventListener("click", doChangeTitle);
    __defers["$.__views.__alloyId26!click!doToggleUpArrow"] && $.__views.__alloyId26.addEventListener("click", doToggleUpArrow);
    __defers["$.__views.__alloyId27!click!doToggleActionBar"] && $.__views.__alloyId27.addEventListener("click", doToggleActionBar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;