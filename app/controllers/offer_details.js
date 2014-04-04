exports.openOfferDetails = function(_tab) {
    _tab.open($.wOfferDetails);
};

$.scDetails.contentOffset.X = 20;
$.scDetails.contentOffset.Y = 20;

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
    $.lblOCategory.text = args.$model.attributes.CategoryTitle;

    $.lblODate.text = args.$model.attributes.PublishDate;

    if (args.$model.attributes.FreelanceYn == 1)
        $.lblOFreelance.text = L('postComboFreelanceY');
    else
        $.lblOFreelance.text = L('postComboFreelanceN');

    $.lblONegativism.text = (parseInt(args.$model.attributes.HumanYn) == 1 ? L('post_Human_Negativ') : L('post_Company_Negativ'));
    $.lblONegativismV.text = args.$model.attributes.Negativism;
    
    $.lblOPositivism.text = (parseInt(args.$model.attributes.HumanYn) == 1 ? L('post_Human_Positiv') : L('post_Company_Positiv'));
    $.lblOPositivismV.text = args.$model.attributes.Positivism;

    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var off = dbOffers.get(args.$model.attributes.OfferID);
    off.set({ "ReadYn": 1 }).save();
}
else {
    $.lblOTitle.text = L('generic_error');
    $.lblOCategory.text = '';
    $.lblODate.text = '';
    $.lblOFreelance.text = '';
    $.lblOFreelanceV.text = '';
    $.lblONegativism.text = '';
    $.lblONegativismV.text = '';
    $.lblOPositivism.text = '';
    $.lblOPositivismV.text = '';
}