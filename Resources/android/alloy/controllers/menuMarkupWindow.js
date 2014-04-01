function Controller() {
    function __alloyId15() {
        $.__views.menuMarkupWindow.removeEventListener("open", __alloyId15);
        if ($.__views.menuMarkupWindow.activity) $.__views.menuMarkupWindow.activity.onCreateOptionsMenu = function(e) {
            var __alloyId14 = {
                title: "Action",
                id: "__alloyId13"
            };
            $.__views.__alloyId13 = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId13.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            doAction ? $.__views.__alloyId13.addEventListener("click", doAction) : __defers["$.__views.__alloyId13!click!doAction"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function doAction() {
        alert("Jackson!");
    }
    function doOpen(e) {
        var actionBar = e.source.activity.actionBar;
        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            e.source.activity.invalidateOptionsMenu();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuMarkupWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuMarkupWindow = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        title: "Markup Menu",
        id: "menuMarkupWindow"
    });
    $.__views.menuMarkupWindow && $.addTopLevelView($.__views.menuMarkupWindow);
    doOpen ? $.__views.menuMarkupWindow.addEventListener("open", doOpen) : __defers["$.__views.menuMarkupWindow!open!doOpen"] = true;
    $.__views.menuMarkupWindow.addEventListener("open", __alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Check out the menu at top-right, or via the menu hardware button if you're running an old, crusty phone.",
        id: "__alloyId16"
    });
    $.__views.menuMarkupWindow.add($.__views.__alloyId16);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menuMarkupWindow!open!doOpen"] && $.__views.menuMarkupWindow.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId13!click!doAction"] && $.__views.__alloyId13.addEventListener("click", doAction);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;