function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offer_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.offer_details = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "offer_details"
    });
    $.__views.offer_details && $.addTopLevelView($.__views.offer_details);
    $.__views.lblTitle = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        id: "lblTitle"
    });
    $.__views.offer_details.add($.__views.lblTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.offer_details.open();
    var args = arguments[0] || {};
    $.lblTitle.text = null != args && null != args.$model ? args.$model.attributes.Title : "Error!";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;