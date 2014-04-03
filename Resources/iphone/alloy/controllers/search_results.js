function Controller() {
    function fetchOffers() {
        var rows = [];
        _.each(foffers, function(item) {
            (item.attributes.Title.indexOf(args.$model.keyword) >= 0 || item.attributes.Positivism.indexOf(args.$model.keyword) >= 0 || item.attributes.Negativism.indexOf(args.$model.keyword) >= 0) && rows.push(Alloy.createController("row_offer", {
                OID: item.attributes.OID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle
            }).getView());
        });
        $.tblOffers.setData(rows);
        Alloy.Globals.LogThis("Search found - " + rows.length + " rows.");
    }
    function viewDetails(idx) {
        var off = foffers[idx];
        var odw = Alloy.createController("offer_details", {
            data: off,
            $model: off
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
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.wSearchResults.add($.__views.tblOffers);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openSearchResults = function(_tab) {
        _tab.open($.wSearchResults);
    };
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var args = arguments[0] || {};
    var whereObj = {
        FreelanceYn: args.$model.freelance > 0 ? 1 : 0
    };
    var foffers = dbOffers.where(whereObj);
    fetchOffers();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.index);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;