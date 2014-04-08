function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row_category";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowCategory = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        hasChild: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        contentHeight: "auto",
        id: "rowCategory"
    });
    $.__views.rowCategory && $.addTopLevelView($.__views.rowCategory);
    $.__views.lblCategoryID = Ti.UI.createLabel({
        id: "lblCategoryID",
        visible: "false"
    });
    $.__views.rowCategory.add($.__views.lblCategoryID);
    $.__views.vRow = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "vRow"
    });
    $.__views.rowCategory.add($.__views.vRow);
    $.__views.lblTitle = Ti.UI.createLabel({
        left: "5dip",
        right: "5dip",
        top: "5dip",
        bottom: "5dip",
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
        height: Ti.UI.SIZE,
        id: "lblTitle"
    });
    $.__views.vRow.add($.__views.lblTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblTitle.text = args.CategoryTitle;
    $.lblCategoryID.text = args.CategoryID;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;