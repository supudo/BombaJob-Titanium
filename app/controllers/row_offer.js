var args = arguments[0] || {};

//$.rowOffer.offerID = OfferID;
$.imgType.image = (args.HumanYn > 0 ? "icon_person.png" : "icon_company.png");
$.lblTitle.text = args.Title;
$.lblCategory.text = args.CategoryTitle;