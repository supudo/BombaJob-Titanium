function Controller() {
    function tblClicked(e) {
        $.trigger("offer_details", e);
    }
    function fetchOffers() {
        var dbOffers = Alloy.Collections.Offers;
        dbOffers && dbOffers.fetch();
        var rows = [];
        _.each(dbOffers.models, function(item) {
            rows.push(Alloy.createController("row_offer", {
                OID: item.attributes.OID,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle
            }).getView());
        });
        $.tblOffers.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newest_offers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("newestOffers"),
        id: "__alloyId1"
    });
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        id: "tblOffers"
    });
    $.__views.__alloyId1.add($.__views.tblOffers);
    tblClicked ? $.__views.tblOffers.addEventListener("click", tblClicked) : __defers["$.__views.tblOffers!click!tblClicked"] = true;
    $.__views.tbNewest = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "tbNewest",
        title: L("newestOffers"),
        icon: "tb_newest.png"
    });
    $.__views.tbNewest && $.addTopLevelView($.__views.tbNewest);
    exports.destroy = function() {};
    _.extend($, $.__views);
    fetchOffers();
    __defers["$.__views.tblOffers!click!tblClicked"] && $.__views.tblOffers.addEventListener("click", tblClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;