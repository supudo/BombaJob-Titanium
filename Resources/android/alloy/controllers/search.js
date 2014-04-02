function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId4 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("search"),
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "14dp"
        },
        text: L("search"),
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.tbSearch = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        id: "tbSearch",
        title: L("search"),
        icon: "tb_search.png"
    });
    $.__views.tbSearch && $.addTopLevelView($.__views.tbSearch);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;