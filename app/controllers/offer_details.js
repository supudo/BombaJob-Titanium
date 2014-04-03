exports.openOfferDetails = function(_tab) {
    _tab.open($.wOfferDetails);
};

var args = arguments[0] || {};
var hasData = true;

if (args != null && args.$model != null)
    hasData = true;
 else
    hasData = false;
    
var offerModel;

if (hasData) {
    if (args.$model.attributes == null)
        offerModel = args.$model;
    else
        offerModel = args.$model.attributes;

    $.lblOTitle.text = args.$model.attributes.Title;

    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var off = dbOffers.get(args.$model.attributes.OfferID);
    off.set({ "ReadYn": 1 }).save();
}
else {
    $.lblOTitle.text = 'Error!';
}

$.btnClose.addEventListener("click", function(e) {
    $.wOfferDetails.close();
});