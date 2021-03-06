function Controller() {
    function fetchOffers() {
        var rows = [];
        _.each(dbOffers.models, function(item) {
            rows.push(Alloy.createController("row_offer", {
                OfferID: item.attributes.OfferID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle,
                ReadYn: item.attributes.ReadYn
            }).getView());
        });
        $.tblOffers.setData(rows);
    }
    function viewDetails(idx) {
        var off = dbOffers.models[idx];
        var odw = Alloy.createController("offer_details", {
            data: off,
            $model: off,
            op: $.tbNewest
        });
        odw.openOfferDetails($.tbNewest);
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
    fetchOffers ? $.__views.__alloyId1.addEventListener("focus", fetchOffers) : __defers["$.__views.__alloyId1!focus!fetchOffers"] = true;
    $.__views.tblOffers = Ti.UI.createTableView({
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId1.add($.__views.tblOffers);
    $.__views.tbNewest = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "tbNewest",
        title: L("newestOffers"),
        icon: "tb_newest.png"
    });
    $.__views.tbNewest && $.addTopLevelView($.__views.tbNewest);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    dbOffers.setSortField("OfferID", "DESC");
    dbOffers.sort();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.index);
    });
    __defers["$.__views.__alloyId1!focus!fetchOffers"] && $.__views.__alloyId1.addEventListener("focus", fetchOffers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;