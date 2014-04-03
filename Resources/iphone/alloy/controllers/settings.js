function Controller() {
    function initSettings() {
        $.txtEmail.value = Ti.App.Properties.getString("BJSettingPrivateEmail");
        $.swInitSync.value = Ti.App.Properties.getString("BJSettingInitSync");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId8 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("settings"),
        backButtonTitle: "",
        id: "__alloyId8"
    });
    initSettings ? $.__views.__alloyId8.addEventListener("focus", initSettings) : __defers["$.__views.__alloyId8!focus!initSettings"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
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
    $.__views.__alloyId10.add($.__views.txtEmail);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_InitSync_summary"),
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.swInitSync = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swInitSync"
    });
    $.__views.__alloyId11.add($.__views.swInitSync);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId13"
    });
    $.__views.__alloyId9.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_OnlineSearch_summary"),
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.swOnlineSearch = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swOnlineSearch"
    });
    $.__views.__alloyId13.add($.__views.swOnlineSearch);
    $.__views.__alloyId15 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId15"
    });
    $.__views.__alloyId9.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("about_ShowCategories_summary"),
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.swShowCategories = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swShowCategories"
    });
    $.__views.__alloyId15.add($.__views.swShowCategories);
    $.__views.tbSettings = Ti.UI.createTab({
        window: $.__views.__alloyId8,
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
        Ti.App.Properties.setString("BJSettingInitSync", $.swInitSync.value);
    });
    $.swOnlineSearch.addEventListener("change", function() {
        Ti.App.Properties.setString("BJSettingOnlineSearch", $.swOnlineSearch.value);
    });
    $.swShowCategories.addEventListener("change", function() {
        Ti.App.Properties.setString("BJSettingShowCategories", $.swShowCategories.value);
    });
    __defers["$.__views.__alloyId8!focus!initSettings"] && $.__views.__alloyId8.addEventListener("focus", initSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;