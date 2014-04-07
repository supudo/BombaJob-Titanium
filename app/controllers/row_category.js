var cid;
exports.setCID = function(catid) {
    cid = catid;
};
exports.getCID = function() {
    return cid;
};

var args = arguments[0] || {};

$.lblTitle.text = args.CategoryTitle;
