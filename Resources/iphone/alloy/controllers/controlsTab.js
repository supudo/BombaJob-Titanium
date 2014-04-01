function Controller() {
    function showModalIndicator() {
        $.progressIndicator.show();
        var value = 0;
        setInterval(function() {
            if (value > 10) return;
            $.progressIndicator.value = value;
            value++;
        }, 200);
        setTimeout(function() {
            $.progressIndicator.hide();
        }, 3e3);
    }
    function showStatusIndicator() {
        $.statusIndicator.show();
        var value = 0;
        setInterval(function() {
            if (value > 10) return;
            $.statusIndicator.value = value;
            value++;
        }, 200);
        setTimeout(function() {
            $.statusIndicator.hide();
        }, 3e3);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "controlsTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "#ffffff",
        id: "__alloyId1"
    });
    $.__views.__alloyId2 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Enabled Button",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Disabled Button",
        enabled: "false",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTextField({
        width: "300dp",
        top: "10dp",
        softKeyboardOnFocus: Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,
        hintText: "Text field w/ Hint Text",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createSwitch({
        top: "10dp",
        width: "200dp",
        value: false,
        titleOn: "Action Switch On",
        titleOff: "Action is Always On",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createSwitch({
        top: "10dp",
        width: "200dp",
        value: false,
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
        title: "Checkbox Style Switch",
        id: "__alloyId7"
    });
    $.__views.__alloyId2.add($.__views.__alloyId7);
    $.__views.slider = Ti.UI.createSlider({
        top: "10dp",
        width: "300dp",
        id: "slider",
        min: "0",
        max: "100",
        value: "50"
    });
    $.__views.__alloyId2.add($.__views.slider);
    $.__views.__alloyId8 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Modal Progress Indicator",
        id: "__alloyId8"
    });
    $.__views.__alloyId2.add($.__views.__alloyId8);
    showModalIndicator ? $.__views.__alloyId8.addEventListener("click", showModalIndicator) : __defers["$.__views.__alloyId8!click!showModalIndicator"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        height: "60dp",
        width: "300dp",
        top: "10dp",
        title: "Status Bar Progress Indicator",
        id: "__alloyId9"
    });
    $.__views.__alloyId2.add($.__views.__alloyId9);
    showStatusIndicator ? $.__views.__alloyId9.addEventListener("click", showStatusIndicator) : __defers["$.__views.__alloyId9!click!showStatusIndicator"] = true;
    $.__views.__alloyId10 = Ti.UI.createSearchBar({
        top: "10dp",
        height: "44dp",
        width: "300dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId2.add($.__views.__alloyId10);
    $.__views.controlsTab = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        title: "Some Controls",
        id: "controlsTab"
    });
    $.__views.controlsTab && $.addTopLevelView($.__views.controlsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId8!click!showModalIndicator"] && $.__views.__alloyId8.addEventListener("click", showModalIndicator);
    __defers["$.__views.__alloyId9!click!showStatusIndicator"] && $.__views.__alloyId9.addEventListener("click", showStatusIndicator);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;