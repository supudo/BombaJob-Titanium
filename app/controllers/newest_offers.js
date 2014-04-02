var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();

fetchOffers();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.index);
});

function fetchOffers() {
    var rows = [];
    _.each(dbOffers.models, function(item) {
        rows.push(Alloy.createController('row_offer', {
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
    var off = dbOffers.models[idx];
    var odw = Alloy.createController("offer_details", {
        data: off,
        "$model": off
    });
    odw.openOfferDetails($.tbNewest);
}