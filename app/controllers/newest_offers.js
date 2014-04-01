//$.newest_offers.open();

function tblClicked(e) {
    $.trigger('offer_details', e);
}

function fetchOffers() {
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    
    var rows = [];
    _.each(dbOffers, function(item) {
        rows.push(Alloy.createController('row_offer', {
            OID: item.OID,
            FreelanceYn: item.FreelanceYn,
            Title: item.Title,
            CategoryTitle: item.CategoryTitle
        }).getView());
    });
    $.tblOffers.setData(rows);
}

fetchOffers();
