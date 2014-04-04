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
    $.__views.scDetails = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "scDetails",
        layout: "vertical",
        disableBounce: "true"
    });
    $.__views.wOfferDetails.add($.__views.scDetails);
    $.__views.lblOCategory = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#444",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblOCategory"
    });
    $.__views.scDetails.add($.__views.lblOCategory);
    $.__views.lblOTitle = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#df9368",
        top: "24dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "22dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "lblOTitle"
    });
    $.__views.scDetails.add($.__views.lblOTitle);
    $.__views.lblODate = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        top: "10dp",
        id: "lblODate"
    });
    $.__views.scDetails.add($.__views.lblODate);
    $.__views.lblOFreelance = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        top: "10dp",
        id: "lblOFreelance"
    });
    $.__views.scDetails.add($.__views.lblOFreelance);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.scDetails.add($.__views.__alloyId2);
    $.__views.lblONegativism = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: "10dp",
        id: "lblONegativism",
        text: L("post_Human_Negativ")
    });
    $.__views.__alloyId2.add($.__views.lblONegativism);
    $.__views.lblONegativismV = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblONegativismV"
    });
    $.__views.__alloyId2.add($.__views.lblONegativismV);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.scDetails.add($.__views.__alloyId3);
    $.__views.lblOPositivism = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: "10dp",
        id: "lblOPositivism",
        text: L("post_Human_Positiv")
    });
    $.__views.__alloyId3.add($.__views.lblOPositivism);
    $.__views.lblOPositivismV = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblOPositivismV"
    });
    $.__views.__alloyId3.add($.__views.lblOPositivismV);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openOfferDetails = function(_tab) {
        _tab.open($.wOfferDetails);
    };
    $.scDetails.contentOffset.X = 20;
    $.scDetails.contentOffset.Y = 20;
    var args = arguments[0] || {};
    var hasData = true;
    hasData = null != args && null != args.$model ? true : false;
    var offerModel;
    if (hasData) {
        offerModel = null == args.$model.attributes ? args.$model : args.$model.attributes;
        $.lblOTitle.text = args.$model.attributes.Title;
        $.lblOCategory.text = args.$model.attributes.CategoryTitle;
        $.lblODate.text = args.$model.attributes.PublishDate;
        $.lblOFreelance.text = 1 == args.$model.attributes.FreelanceYn ? L("postComboFreelanceY") : L("postComboFreelanceN");
        $.lblONegativism.text = 1 == parseInt(args.$model.attributes.HumanYn) ? L("post_Human_Negativ") : L("post_Company_Negativ");
        $.lblONegativismV.text = args.$model.attributes.Negativism;
        $.lblOPositivism.text = 1 == parseInt(args.$model.attributes.HumanYn) ? L("post_Human_Positiv") : L("post_Company_Positiv");
        $.lblOPositivismV.text = args.$model.attributes.Positivism;
        var dbOffers = Alloy.Collections.Offers;
        dbOffers && dbOffers.fetch();
        var off = dbOffers.get(args.$model.attributes.OfferID);
        off.set({
            ReadYn: 1
        }).save();
    } else {
        $.lblOTitle.text = L("generic_error");
        $.lblOCategory.text = "";
        $.lblODate.text = "";
        $.lblOFreelance.text = "";
        $.lblOFreelanceV.text = "";
        $.lblONegativism.text = "";
        $.lblONegativismV.text = "";
        $.lblOPositivism.text = "";
        $.lblOPositivismV.text = "";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;