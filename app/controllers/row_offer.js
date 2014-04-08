var oid;
exports.setOID = function(offid) {
    oid = offid;
};
exports.getOID = function() {
    return oid;
};

var args = arguments[0] || {};

$.imgType.image = (args.HumanYn > 0 ? "/images/icon_person.png" : "/images/icon_company.png");
$.lblTitle.text = args.Title;
$.lblCategory.text = args.CategoryTitle;

$.lblTitle.font = { fontFamily:'Ubuntu', fontSize: '16dp', fontStyle: 'normal', fontWeight: 'normal' };
if (args.ReadYn == null || parseInt(args.ReadYn) == 0)
    $.lblTitle.font = { fontFamily:'Ubuntu', fontSize: '16dp', fontStyle: 'normal', fontWeight: 'bold' };
