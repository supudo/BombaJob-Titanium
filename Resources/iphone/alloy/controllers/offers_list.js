function Controller() {
    function fetchOffers() {
        var rows = [];
        _.each(foffers, function(item) {
            var w = Alloy.createController("row_offer", {
                OfferID: item.attributes.OfferID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle,
                ReadYn: item.attributes.ReadYn
            }).getView();
            w.setOID(item.attributes.OfferID);
            rows.push(w);
        });
        $.tblOffersList.setData(rows);
    }
    function viewDetails(oid) {
        var off = dbOffers.where({
            OfferID: oid
        });
        var odw = Alloy.createController("offer_details", {
            data: off[0],
            $model: off[0]
        });
        odw.openOfferDetails(args.op);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offers_list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wOffersList = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wOffersList",
        title: L("headerOffers")
    });
    $.__views.wOffersList && $.addTopLevelView($.__views.wOffersList);
    fetchOffers ? $.__views.wOffersList.addEventListener("focus", fetchOffers) : __defers["$.__views.wOffersList!focus!fetchOffers"] = true;
    $.__views.tblOffersList = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffersList"
    });
    $.__views.wOffersList.add($.__views.tblOffersList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openOffersList = function(_tab) {
        _tab.open($.wOffersList);
    };
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    dbOffers.setSortField("OfferID", "DESC");
    dbOffers.sort();
    var args = arguments[0] || {};
    var foffers = dbOffers.where({
        CategoryID: args.$model.attributes.CategoryID
    });
    $.tblOffersList.addEventListener("click", function(e) {
        viewDetails(e.row.getOID());
    });
    __defers["$.__views.wOffersList!focus!fetchOffers"] && $.__views.wOffersList.addEventListener("focus", fetchOffers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;