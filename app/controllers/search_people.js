var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();
var foffers = dbOffers.where({ HumanYn: 1 });

fetchOffers();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.index);
});

function fetchOffers() {
    var rows = [];
    _.each(foffers, function(item) {
        rows.push(Alloy.createController('row_offer', {
            OfferID: item.attributes.OfferID,
            HumanYn: item.attributes.HumanYn,
            FreelanceYn: item.attributes.FreelanceYn,
            Title: item.attributes.Title,
            CategoryTitle: item.attributes.CategoryTitle
        }).getView());
    });
    $.tblOffers.setData(rows);
}

function viewDetails(idx) {
    var off = foffers[idx];
    var odw = Alloy.createController("offer_details", {
        data: off,
        "$model": off
    });
    odw.openOfferDetails($.tbPeople);
}