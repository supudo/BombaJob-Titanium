function Controller() {
    function fetchOffers() {
        var rows = [];
        _.each(foffers, function(item) {
            if (item.attributes.Title.indexOf(args.$model.keyword) >= 0 || item.attributes.Positivism.indexOf(args.$model.keyword) >= 0 || item.attributes.Negativism.indexOf(args.$model.keyword) >= 0) {
                var w = Alloy.createController("row_offer", {
                    OfferID: item.attributes.OfferID,
                    HumanYn: item.attributes.HumanYn,
                    FreelanceYn: item.attributes.FreelanceYn,
                    Title: item.attributes.Title,
                    CategoryTitle: item.attributes.CategoryTitle,
                    ReadYn: item.attributes.ReadYn
                }).getView();
                rows.push(w);
            }
        });
        $.tblSearchResults.setData(rows);
        Alloy.Globals.LogThis("Search found - " + rows.length + " rows.");
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
    this.__controllerPath = "search_results";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wSearchResults = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wSearchResults",
        title: L("search_results")
    });
    $.__views.wSearchResults && $.addTopLevelView($.__views.wSearchResults);
    fetchOffers ? $.__views.wSearchResults.addEventListener("focus", fetchOffers) : __defers["$.__views.wSearchResults!focus!fetchOffers"] = true;
    $.__views.tblSearchResults = Ti.UI.createTableView({
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblSearchResults"
    });
    $.__views.wSearchResults.add($.__views.tblSearchResults);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openSearchResults = function(_tab) {
        _tab.open($.wSearchResults);
    };
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    dbOffers.setSortField("OfferID", "DESC");
    dbOffers.sort();
    var args = arguments[0] || {};
    var foffers = dbOffers.where({
        FreelanceYn: args.$model.freelance > 0 ? 1 : 0
    });
    $.tblSearchResults.addEventListener("click", function(e) {
        viewDetails(e.row.children[0].text);
    });
    __defers["$.__views.wSearchResults!focus!fetchOffers"] && $.__views.wSearchResults.addEventListener("focus", fetchOffers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;