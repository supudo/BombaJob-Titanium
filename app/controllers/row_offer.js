var oid;
exports.setOID = function(offid) {
    oid = offid;
};
exports.getOID = function() {
    return oid;
};

var args = arguments[0] || {};

$.imgType.image = (args.HumanYn > 0 ? "icon_person.png" : "icon_company.png");
$.lblTitle.text = args.Title;
$.lblCategory.text = args.CategoryTitle;