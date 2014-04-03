var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();
dbOffers.setSortField("ReadYn", "ASC");
dbOffers.sort();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.row.getOID());
});

function fetchOffersJobs() {
    var rows = [];
    _.each(dbOffers.where({ HumanYn: 0 }), function(item) {
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
    $.tblOffers.setData(rows);
}

function viewDetails(oid) {
    var off = dbOffers.where({OfferID: oid});
    var odw = Alloy.createController("offer_details", {
        data: off[0],
        "$model": off[0]
    });
    odw.openOfferDetails($.tbJobs);
}