var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.index);
});

function fetchOffersJobs() {
    var rows = [];
    _.each(dbOffers.where({ HumanYn: 0 }), function(item) {
        rows.push(Alloy.createController('row_offer', {
            OfferID: item.attributes.OfferID,
            HumanYn: item.attributes.HumanYn,
            FreelanceYn: item.attributes.FreelanceYn,
            Title: item.attributes.Title,
            CategoryTitle: item.attributes.CategoryTitle,
            ReadYn: item.attributes.ReadYn
        }).getView());
    });
    $.tblOffers.setData(rows);
}

function viewDetails(idx) {
    var off = dbOffers.where({ HumanYn: 0 })[idx];
    var odw = Alloy.createController("offer_details", {
        data: off,
        "$model": off
    });
    odw.openOfferDetails($.tbJobs);
}