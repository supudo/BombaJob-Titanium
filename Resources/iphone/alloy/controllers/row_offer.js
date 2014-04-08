function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row_offer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowOffer = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        hasChild: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        contentHeight: "auto",
        id: "rowOffer"
    });
    $.__views.rowOffer && $.addTopLevelView($.__views.rowOffer);
    $.__views.lblOfferID = Ti.UI.createLabel({
        id: "lblOfferID",
        visible: "false"
    });
    $.__views.rowOffer.add($.__views.lblOfferID);
    $.__views.imgType = Ti.UI.createImageView({
        width: "40dp",
        left: "5dp",
        top: "5dp",
        clipsToBounds: true,
        touchEnabled: false,
        id: "imgType"
    });
    $.__views.rowOffer.add($.__views.imgType);
    $.__views.vRow = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "vRow"
    });
    $.__views.rowOffer.add($.__views.vRow);
    $.__views.lblTitle = Ti.UI.createLabel({
        left: "50dip",
        top: "5dip",
        right: "5dip",
        ellipsize: true,
        wordWrap: false,
        textAlign: "left",
        touchEnabled: false,
        color: "#000",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        horizontalWrap: true,
        width: Ti.UI.FILL,
        id: "lblTitle"
    });
    $.__views.vRow.add($.__views.lblTitle);
    $.__views.lblCategory = Ti.UI.createLabel({
        left: "50dip",
        right: "5dip",
        bottom: "5dip",
        ellipsize: true,
        wordWrap: false,
        textAlign: "left",
        touchEnabled: false,
        color: "#444",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        horizontalWrap: true,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "lblCategory"
    });
    $.__views.vRow.add($.__views.lblCategory);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imgType.image = args.HumanYn > 0 ? "/images/icon_person.png" : "/images/icon_company.png";
    $.lblOfferID.text = args.OfferID;
    $.lblTitle.text = args.Title;
    $.lblCategory.text = args.CategoryTitle;
    $.lblTitle.font = {
        fontFamily: "Ubuntu",
        fontSize: "16dp",
        fontStyle: "normal",
        fontWeight: "normal"
    };
    (null == args.ReadYn || 0 == parseInt(args.ReadYn)) && ($.lblTitle.font = {
        fontFamily: "Ubuntu",
        fontSize: "16dp",
        fontStyle: "normal",
        fontWeight: "bold"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;