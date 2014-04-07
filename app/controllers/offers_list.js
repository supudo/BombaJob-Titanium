exports.openOffersList = function(_tab) {
    _tab.open($.wOffersList);
};

var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();
dbOffers.setSortField("OfferID", "DESC");
dbOffers.sort();

var args = arguments[0] || {};

var foffers = dbOffers.where({CategoryID: args.$model.attributes.CategoryID});

$.tblOffersList.addEventListener("click", function(e) {
    viewDetails(e.row.getOID());
});

function fetchOffers() {
    var rows = [];
    _.each(foffers, function(item) {
        var w = Alloy.createController('row_offer', {
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
    var off = dbOffers.where({OfferID: oid});
    var odw = Alloy.createController("offer_details", {
        data: off[0],
        "$model": off[0]
    });
    odw.openOfferDetails(args.op);
}