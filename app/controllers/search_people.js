var dbOffers = Alloy.Collections.Offers;
dbOffers && dbOffers.fetch();
dbOffers.setSortField("ReadYn", "ASC");
dbOffers.sort();

var dbCategories = Alloy.Collections.Categories;
dbCategories && dbCategories.fetch();
dbCategories.setSortField("CategoryTitle", "ASC");
dbCategories.sort();

$.tblOffers.addEventListener("click", function(e) {
    if (e.section.headerTitle == L('headerCategories'))
        viewCategory(e.row.children[0].text);
    else
        viewDetails(e.row.children[0].text);
});

function fetchOffersPeople() {
    if (Ti.App.Properties.getBool('BJSettingShowCategories', false)) {
        $.tblOffers.setData([]);

        var sCategoriesView = Ti.UI.createView({
            height: 40,
            backgroundColor: '#444'
        });
        var sCategoriesTitle = Ti.UI.createLabel({
            text: L('headerCategories'),
            font: { fontFamily:'Ubuntu', fontSize: '20dp', fontStyle: 'normal', fontWeight: 'bold' },
            textAlign: 'left',
            width: Ti.UI.FILL,
            color: '#df9368',
            left: '10dp'
        });
        sCategoriesView.add(sCategoriesTitle);
        var sCategories = Titanium.UI.createTableViewSection({ headerView: sCategoriesView });
        
        _.each(dbCategories.models, function(item) {
            var w = Alloy.createController('row_category', {
                CategoryID: item.attributes.CategoryID,
                CategoryTitle: item.attributes.CategoryTitle
            }).getView();
            sCategories.add(w);
        });

        $.tblOffers.appendSection(sCategories);

        var sOffersView = Ti.UI.createView({
            height: 40,
            backgroundColor: '#444'
        });
        var sOffersTitle = Ti.UI.createLabel({
            text: L('headerOffers'),
            font: { fontFamily:'Ubuntu', fontSize: '20dp', fontStyle: 'normal', fontWeight: 'bold' },
            textAlign: 'left',
            width: Ti.UI.FILL,
            color: '#df9368',
            left: '10dp'
        });
        sOffersView.add(sOffersTitle);
        var sOffers = Titanium.UI.createTableViewSection({ headerView: sOffersView });
        
        _.each(dbOffers.where({ HumanYn: 1 }), function(item) {
            var w = Alloy.createController('row_offer', {
                OfferID: item.attributes.OfferID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle,
                ReadYn: item.attributes.ReadYn
            }).getView();
            sOffers.add(w);
        });

        $.tblOffers.appendSection(sOffers);
    }
    else {
        var rows = [];
        _.each(dbOffers.where({ HumanYn: 1 }), function(item) {
            var w = Alloy.createController('row_offer', {
                OfferID: item.attributes.OfferID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle,
                ReadYn: item.attributes.ReadYn
            }).getView();
            rows.push(w);
        });
        $.tblOffers.setData(rows);
    }
}

function viewDetails(oid) {
    var off = dbOffers.where({OfferID: oid});
    var odw = Alloy.createController("offer_details", {
        data: off[0],
        "$model": off[0],
        op: $.tbPeople
    });
    odw.openOfferDetails($.tbPeople);
}

function viewCategory(cid) {
    var cat = dbCategories.where({CategoryID: cid});
    var olw = Alloy.createController("offers_list", {
        data: cat[0],
        "$model": cat[0],
        op: $.tbPeople
    });
    olw.openOffersList($.tbPeople);
}
