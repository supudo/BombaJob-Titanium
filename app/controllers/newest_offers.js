var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();
dbOffers.setSortField("OfferID", "DESC");
dbOffers.sort();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.index);
});

function fetchOffers() {
    var rows = [];
    _.each(dbOffers.models, function(item) {
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
    var off = dbOffers.models[idx];
    var odw = Alloy.createController("offer_details", {
        data: off,
        "$model": off,
        op: $.tbNewest
    });
    odw.openOfferDetails($.tbNewest);
}