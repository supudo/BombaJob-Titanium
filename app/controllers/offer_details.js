exports.openOfferDetails = function(_tab) {
    _tab.open($.wOfferDetails);
};

var args = arguments[0] || {};
var hasData = true;

if (args != null && args.$model != null)
    hasData = true;
 else
    hasData = false;

if (hasData) {
    $.lblOTitle.text = args.$model.attributes.Title;
}
else {
    $.lblOTitle.text = 'Error!';
}

$.btnClose.addEventListener("click", function(e) {
    $.wOfferDetails.close();
});