function Controller() {
    function openEdit() {
        $.txtDetails.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "post_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wPostDetails = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wPostDetails",
        title: L("post"),
        backButtonTitle: ""
    });
    $.__views.wPostDetails && $.addTopLevelView($.__views.wPostDetails);
    openEdit ? $.__views.wPostDetails.addEventListener("focus", openEdit) : __defers["$.__views.wPostDetails!focus!openEdit"] = true;
    $.__views.__alloyId2 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.wPostDetails.add($.__views.__alloyId2);
    $.__views.lblPostTitle = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblPostTitle",
        text: L("post_Human_Negativ")
    });
    $.__views.__alloyId2.add($.__views.lblPostTitle);
    $.__views.txtDetails = Ti.UI.createTextArea({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "auto",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtDetails",
        suppressReturn: "false"
    });
    $.__views.__alloyId2.add($.__views.txtDetails);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openDetails = function(_tab) {
        _tab.open($.wPostDetails);
    };
    var args = arguments[0] || {};
    var t = "";
    t = 2 == args.$model.h ? 0 == args.$model.f ? L("post_Company_Negativ") : L("post_Company_Positiv") : 0 == args.$model.f ? L("post_Human_Negativ") : L("post_Human_Positiv");
    $.lblPostTitle.text = t;
    $.txtDetails.value = args.$model.t;
    $.txtDetails.addEventListener("change", function() {
        0 == args.$model.f ? Alloy.Globals.PostNegativ = $.txtDetails.value : Alloy.Globals.PostPositiv = $.txtDetails.value;
    });
    __defers["$.__views.wPostDetails!focus!openEdit"] && $.__views.wPostDetails.addEventListener("focus", openEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;