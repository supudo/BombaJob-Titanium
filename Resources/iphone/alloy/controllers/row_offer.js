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
        className: "ir",
        hasChild: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        contentHeight: "auto",
        id: "rowOffer"
    });
    $.__views.rowOffer && $.addTopLevelView($.__views.rowOffer);
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
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        right: "5dip",
        ellipsize: true,
        wordWrap: false,
        touchEnabled: false,
        color: "#000",
        horizontalWrap: true,
        width: Ti.UI.FILL,
        id: "lblTitle"
    });
    $.__views.vRow.add($.__views.lblTitle);
    $.__views.lblCategory = Ti.UI.createLabel({
        left: "50dip",
        top: "10dp",
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        right: "5dip",
        bottom: "5dip",
        ellipsize: true,
        wordWrap: false,
        touchEnabled: false,
        color: "#444",
        horizontalWrap: true,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "lblCategory"
    });
    $.__views.vRow.add($.__views.lblCategory);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imgType.image = args.FreelanceYn > 0 ? "icon_person.png" : "icon_company.png";
    $.lblTitle.text = args.Title;
    $.lblCategory.text = args.CategoryTitle;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;