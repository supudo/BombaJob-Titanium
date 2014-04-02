function Controller() {
    function fetchOffers() {
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
    function viewDetails(idx) {
        var off = dbOffers.models[idx];
        var odw = Alloy.createController("offer_details", {
            data: off,
            $model: off
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
    $.__views.__alloyId7 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("searchPeople"),
        id: "__alloyId7"
    });
    $.__views.tblOffers = Ti.UI.createTableView({
        top: "10dp",
        backgroundColor: "transparent",
        separatorColor: "#df9368",
        id: "tblOffers"
    });
    $.__views.__alloyId7.add($.__views.tblOffers);
    $.__views.tbPeople = Ti.UI.createTab({
        window: $.__views.__alloyId7,
        id: "tbPeople",
        title: L("searchPeople"),
        icon: "tb_people.png"
    });
    $.__views.tbPeople && $.addTopLevelView($.__views.tbPeople);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    fetchOffers();
    $.tblOffers.addEventListener("click", function(e) {
        viewDetails(e.index);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;