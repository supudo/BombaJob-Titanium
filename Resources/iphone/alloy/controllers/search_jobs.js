function Controller() {
    function fetchOffersJobs() {
        if (Ti.App.Properties.getBool("BJSettingShowCategories", false)) {
            $.tblOffers.setData([]);
            var sCategoriesView = Ti.UI.createView({
                height: 40,
                backgroundColor: "#444"
            });
            var sCategoriesTitle = Ti.UI.createLabel({
                text: L("headerCategories"),
                font: {
                    fontFamily: "Ubuntu",
                    fontSize: "20dp",
                    fontStyle: "normal",
                    fontWeight: "bold"
                },
                textAlign: "left",
                width: Ti.UI.FILL,
                color: "#df9368",
                left: "10dp"
            });
            sCategoriesView.add(sCategoriesTitle);
            var sCategories = Titanium.UI.createTableViewSection({
                headerView: sCategoriesView
            });
            _.each(dbCategories.models, function(item) {
                var w = Alloy.createController("row_category", {
                    CategoryID: item.attributes.CategoryID,
                    CategoryTitle: item.attributes.CategoryTitle
                }).getView();
                sCategories.add(w);
            });
            $.tblOffers.appendSection(sCategories);
            var sOffersView = Ti.UI.createView({
                height: 40,
                backgroundColor: "#444"
            });
            var sOffersTitle = Ti.UI.createLabel({
                text: L("headerOffers"),
                font: {
                    fontFamily: "Ubuntu",
                    fontSize: "20dp",
                    fontStyle: "normal",
                    fontWeight: "bold"
                },
                textAlign: "left",
                width: Ti.UI.FILL,
                color: "#df9368",
                left: "10dp"
            });
            sOffersView.add(sOffersTitle);
            var sOffers = Titanium.UI.createTableViewSection({
                headerView: sOffersView
            });
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
                sOffers.add(w);
            });
            $.tblOffers.appendSection(sOffers);
        } else {
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
                rows.push(w);
            });
            $.tblOffers.setData(rows);
        }
    }
    function viewDetails(oid) {
        var off = dbOffers.where({
            OfferID: oid
        });
        var odw = Alloy.createController("offer_details", {
            data: off[0],
            $model: off[0],
            op: $.tbJobs
        });
        odw.openOfferDetails($.tbJobs);
    }
    function viewCategory(cid) {
        var cat = dbCategories.where({
            CategoryID: cid
        });
        var olw = Alloy.createController("offers_list", {
            data: cat[0],
            $model: cat[0],
            op: $.tbJobs
        });
        olw.openOffersList($.tbJobs);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search_jobs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId18 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("searchJobs"),
        id: "__alloyId18"
    });
    fetchOffersJobs ? $.__views.__alloyId18.addEventListener("focus", fetchOffersJobs) : __defers["$.__views.__alloyId18!focus!fetchOffersJobs"] = true;
    $.__views.tblOffers = Ti.UI.createTableView({
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId18.add($.__views.tblOffers);
    $.__views.tbJobs = Ti.UI.createTab({
        window: $.__views.__alloyId18,
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
    var dbCategories = Alloy.Collections.Categories;
    dbCategories && dbCategories.fetch();
    dbCategories.setSortField("CategoryTitle", "ASC");
    dbCategories.sort();
    $.tblOffers.addEventListener("click", function(e) {
        e.section.headerTitle == L("headerCategories") ? viewCategory(e.row.children[0].text) : viewDetails(e.row.children[0].text);
    });
    __defers["$.__views.__alloyId18!focus!fetchOffersJobs"] && $.__views.__alloyId18.addEventListener("focus", fetchOffersJobs);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;