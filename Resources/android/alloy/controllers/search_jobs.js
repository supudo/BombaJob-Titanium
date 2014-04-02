function Controller() {
    function fetchOffers() {
        var rows = [];
        _.each(foffers, function(item) {
            rows.push(Alloy.createController("row_offer", {
                OID: item.attributes.OID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle
            }).getView());
        });
        $.tblOffers.setData(rows);
    }
    function viewDetails(idx) {
        var off = foffers[idx];
        var odw = Alloy.createController("offer_details", {
            data: off,
            $model: off
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
    $.__views.__alloyId6 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("searchJobs"),
        id: "__alloyId6"
    });
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId6.add($.__views.tblOffers);
    $.__views.tbJobs = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        id: "tbJobs",
        title: L("searchJobs"),
        icon: "tb_jobs.png"
    });
    $.__views.tbJobs && $.addTopLevelView($.__views.tbJobs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var foffers = dbOffers.where({
        HumanYn: 0
    });
    fetchOffers();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.index);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;