function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row_offer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row_offer = Ti.UI.createTableViewRow({
        id: "row_offer"
    });
    $.__views.row_offer && $.addTopLevelView($.__views.row_offer);
    $.__views.imgType = Ti.UI.createImageView({
        id: "imgType"
    });
    $.__views.row_offer.add($.__views.imgType);
    $.__views.lblTitle = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        id: "lblTitle"
    });
    $.__views.row_offer.add($.__views.lblTitle);
    $.__views.lblCategory = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        id: "lblCategory"
    });
    $.__views.row_offer.add($.__views.lblCategory);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.offerID = args.OID;
    $.imgType.image = args.FreelanceYn > 0 ? "icon_person.png" : "icon_company.png";
    $.lblTitle.text = args.Title;
    $.lblCategory.text = args.CategoryTitle;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;