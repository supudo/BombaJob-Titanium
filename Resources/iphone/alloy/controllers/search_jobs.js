function Controller() {
    function fetchOffersJobs() {
        var rows = [];
        _.each(dbOffers.where({
            HumanYn: 0
        }), function(item) {
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
        $.tblOffers.setData(rows);
    }
    function viewDetails(oid) {
        var off = dbOffers.where({
            OfferID: oid
        });
        var odw = Alloy.createController("offer_details", {
            data: off[0],
            $model: off[0]
        });
        odw.openOfferDetails($.tbJobs);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search_jobs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId13 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("searchJobs"),
        id: "__alloyId13"
    });
    fetchOffersJobs ? $.__views.__alloyId13.addEventListener("focus", fetchOffersJobs) : __defers["$.__views.__alloyId13!focus!fetchOffersJobs"] = true;
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId13.add($.__views.tblOffers);
    $.__views.tbJobs = Ti.UI.createTab({
        window: $.__views.__alloyId13,
        id: "tbJobs",
        title: L("searchJobs"),
        icon: "tb_jobs.png"
    });
    $.__views.tbJobs && $.addTopLevelView($.__views.tbJobs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    dbOffers.setSortField("ReadYn", "ASC");
    dbOffers.sort();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.row.getOID());
    });
    __defers["$.__views.__alloyId13!focus!fetchOffersJobs"] && $.__views.__alloyId13.addEventListener("focus", fetchOffersJobs);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;