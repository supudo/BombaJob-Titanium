function tblClicked(e) {
    $.trigger('offer_details', e);
}

function fetchOffers() {
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var rows = [];
    _.each(dbOffers.models, function(item) {
        rows.push(Alloy.createController('row_offer', {
            OID: item.attributes.OID,
            FreelanceYn: item.attributes.FreelanceYn,
            Title: item.attributes.Title,
            CategoryTitle: item.attributes.CategoryTitle
        }).getView());
    });
    $.tblOffers.setData(rows);
}

fetchOffers();
