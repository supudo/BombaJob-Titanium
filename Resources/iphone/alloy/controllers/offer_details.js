function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offer_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.odw = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "odw",
        backButtonTitle: "",
        title: L("title_Offer")
    });
    $.__views.odw && $.addTopLevelView($.__views.odw);
    $.__views.lblOTitle = Ti.UI.createLabel({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        verticalAlign: "center",
        color: "#df9368",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "lblOTitle"
    });
    $.__views.odw.add($.__views.lblOTitle);
    $.__views.btnClose = Ti.UI.createButton({
        id: "btnClose",
        title: "BACK"
    });
    $.__views.odw.add($.__views.btnClose);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openOfferDetails = function(_tab) {
        _tab.open($.odw);
    };
    var args = arguments[0] || {};
    var hasData = true;
    hasData = null != args && null != args.$model ? true : false;
    $.lblOTitle.text = hasData ? args.$model.attributes.Title : "Error!";
    $.btnClose.addEventListener("click", function() {
        $.odw.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;