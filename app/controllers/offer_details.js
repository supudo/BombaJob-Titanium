exports.openOfferDetails = function(_tab) {
  _tab.open($.odw);
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
