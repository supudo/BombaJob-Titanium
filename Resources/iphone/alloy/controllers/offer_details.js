function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offer_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wOfferDetails = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wOfferDetails",
        backButtonTitle: "",
        title: L("title_Offer")
    });
    $.__views.wOfferDetails && $.addTopLevelView($.__views.wOfferDetails);
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
    $.__views.wOfferDetails.add($.__views.lblOTitle);
    $.__views.btnClose = Ti.UI.createButton({
        id: "btnClose",
        title: "BACK"
    });
    $.__views.wOfferDetails.add($.__views.btnClose);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openOfferDetails = function(_tab) {
        _tab.open($.wOfferDetails);
    };
    var args = arguments[0] || {};
    var hasData = true;
    hasData = null != args && null != args.$model ? true : false;
    var offerModel;
    if (hasData) {
        offerModel = null == args.$model.attributes ? args.$model : args.$model.attributes;
        $.lblOTitle.text = args.$model.attributes.Title;
        var dbOffers = Alloy.Collections.Offers;
        dbOffers && dbOffers.fetch();
        var off = dbOffers.get(args.$model.attributes.OfferID);
        off.set({
            ReadYn: 1
        }).save();
    } else $.lblOTitle.text = "Error!";
    $.btnClose.addEventListener("click", function() {
        $.wOfferDetails.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;