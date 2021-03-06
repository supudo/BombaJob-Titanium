function Controller() {
    function initSettings() {
        $.txtEmail.value = Ti.App.Properties.getString("BJSettingPrivateEmail", "");
        $.swInitSync.value = Ti.App.Properties.getBool("BJSettingInitSync", true);
        $.swOnlineSearch.value = Ti.App.Properties.getBool("BJSettingOnlineSearch", true);
        $.swShowCategories.value = Ti.App.Properties.getBool("BJSettingShowCategories", false);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId20 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("settings"),
        backButtonTitle: "",
        id: "__alloyId20"
    });
    initSettings ? $.__views.__alloyId20.addEventListener("focus", initSettings) : __defers["$.__views.__alloyId20!focus!initSettings"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.txtEmail = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: "32dp",
        right: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        autocorrect: false,
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtEmail",
        hintText: L("about_StorePrivateData_summary")
    });
    $.__views.__alloyId22.add($.__views.txtEmail);
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_InitSync_summary"),
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.swInitSync = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swInitSync"
    });
    $.__views.__alloyId23.add($.__views.swInitSync);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId25"
    });
    $.__views.__alloyId21.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_OnlineSearch_summary"),
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.swOnlineSearch = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swOnlineSearch"
    });
    $.__views.__alloyId25.add($.__views.swOnlineSearch);
    $.__views.__alloyId27 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId27"
    });
    $.__views.__alloyId21.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_ShowCategories_summary"),
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.swShowCategories = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swShowCategories"
    });
    $.__views.__alloyId27.add($.__views.swShowCategories);
    $.__views.tbSettings = Ti.UI.createTab({
        window: $.__views.__alloyId20,
        id: "tbSettings",
        title: L("settings"),
        icon: "tb_settings.png"
    });
    $.__views.tbSettings && $.addTopLevelView($.__views.tbSettings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.txtEmail.addEventListener("change", function() {
        Ti.App.Properties.setString("BJSettingPrivateEmail", $.txtEmail.value);
    });
    $.swInitSync.addEventListener("change", function() {
        Ti.App.Properties.setBool("BJSettingInitSync", $.swInitSync.value);
    });
    $.swOnlineSearch.addEventListener("change", function() {
        Ti.App.Properties.setBool("BJSettingOnlineSearch", $.swOnlineSearch.value);
    });
    $.swShowCategories.addEventListener("change", function() {
        Ti.App.Properties.setBool("BJSettingShowCategories", $.swShowCategories.value);
    });
    __defers["$.__views.__alloyId20!focus!initSettings"] && $.__views.__alloyId20.addEventListener("focus", initSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;