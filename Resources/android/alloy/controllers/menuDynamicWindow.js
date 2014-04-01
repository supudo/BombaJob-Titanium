function Controller() {
    function doOpen(e) {
        var activity = $.win.activity;
        if (activity.actionBar) {
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            var LOGIN = 1, LOGOUT = 2;
            var loggedIn = false;
            activity.onCreateOptionsMenu = function(e) {
                var menu = e.menu;
                var login = menu.add({
                    title: "Login",
                    itemId: LOGIN
                });
                login.setIcon("login.png");
                login.addEventListener("click", function() {
                    loggedIn = true;
                    $.win.activity.invalidateOptionsMenu();
                });
                var logout = menu.add({
                    title: "Logout",
                    itemId: LOGOUT
                });
                logout.setIcon("logout.png");
                logout.addEventListener("click", function() {
                    loggedIn = false;
                    $.win.activity.invalidateOptionsMenu();
                });
            };
            activity.onPrepareOptionsMenu = function(e) {
                var menu = e.menu;
                menu.findItem(LOGIN).setVisible(!loggedIn);
                menu.findItem(LOGOUT).setVisible(loggedIn);
            };
            $.win.activity.invalidateOptionsMenu();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuDynamicWindow";
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
        title: "Dynamically Created Menu"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
    $.__views.__alloyId11 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: "Check out the dynamically created menu at top-right, or via the menu hardware button if you're running an old, crusty phone.'",
        id: "__alloyId11"
    });
    $.__views.win.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;