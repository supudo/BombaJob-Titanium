function Controller() {
    function fetchOffersPeople() {
        var rows = [];
        _.each(dbOffers.where({
            HumanYn: 1
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
            $model: off[0],
            op: $.tbPeople
        });
        odw.openOfferDetails($.tbPeople);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search_people";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId19 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("searchPeople"),
        id: "__alloyId19"
    });
    fetchOffersPeople ? $.__views.__alloyId19.addEventListener("focus", fetchOffersPeople) : __defers["$.__views.__alloyId19!focus!fetchOffersPeople"] = true;
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId19.add($.__views.tblOffers);
    $.__views.tbPeople = Ti.UI.createTab({
        window: $.__views.__alloyId19,
        id: "tbPeople",
        title: L("searchPeople"),
        icon: "tb_people.png"
    });
    $.__views.tbPeople && $.addTopLevelView($.__views.tbPeople);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    dbOffers.setSortField("ReadYn", "ASC");
    dbOffers.sort();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.row.getOID());
    });
    __defers["$.__views.__alloyId19!focus!fetchOffersPeople"] && $.__views.__alloyId19.addEventListener("focus", fetchOffersPeople);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;