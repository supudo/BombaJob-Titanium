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

    $.lblOTitle.text = offerModel.Title;
}
else {
    $.lblOTitle.text = 'Error!';
}

$.btnClose.addEventListener("click", function(e) {
    $.wOfferDetails.close();
});