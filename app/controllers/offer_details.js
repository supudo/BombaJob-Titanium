$.offer_details.open();
var args = arguments[0] || {};

if (args != null && args.$model != null)
    $.lblTitle.text = args.$model.attributes.Title;
 else
    $.lblTitle.text = 'Error!';
