exports.openSearchResults = function(_tab) {
    _tab.open($.wSearchResults);
};

var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();

var args = arguments[0] || {};

var whereObj = {
    FreelanceYn: (args.$model.freelance > 0 ? 1 : 0)
};
var foffers = dbOffers.where(whereObj);

fetchOffers();

$.tblOffers.addEventListener("click", function(e) {
    viewDetails(e.index);
});

function fetchOffers() {
    var rows = [];
    _.each(foffers, function(item) {
        if (item.attributes.Title.indexOf(args.$model.keyword) >= 0 ||
            item.attributes.Positivism.indexOf(args.$model.keyword) >= 0 ||
            item.attributes.Negativism.indexOf(args.$model.keyword) >= 0) {
            rows.push(Alloy.createController('row_offer', {
                OID: item.attributes.OID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle
            }).getView());
        }
    });
    $.tblOffers.setData(rows);
    Alloy.Globals.LogThis("Search found - " + rows.length + " rows.");
}

function viewDetails(idx) {
    var off = foffers[idx];
    var odw = Alloy.createController("offer_details", {
        data: off,
        "$model": off
    });
    odw.openOfferDetails(args.op);
}