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
        viewCategory(e.row.getCID());
    else
        viewDetails(e.row.getOID());
});

function fetchOffersPeople() {
    if (Ti.App.Properties.getBool('BJSettingShowCategories', false)) {
        $.tblOffers.setData([]);

        var sCategories = Titanium.UI.createTableViewSection();
        sCategories.headerTitle = L('headerCategories');
        
        _.each(dbCategories.models, function(item) {
            var w = Alloy.createController('row_category', {
                CategoryTitle: item.attributes.CategoryTitle
            }).getView();
            w.setCID(item.attributes.CategoryID);
            sCategories.add(w);
        });

        $.tblOffers.appendSection(sCategories);

        var sOffers = Titanium.UI.createTableViewSection();
        sOffers.headerTitle = L('headerOffers');
        
        _.each(dbOffers.where({ HumanYn: 1 }), function(item) {
            var w = Alloy.createController('row_offer', {
                OfferID: item.attributes.OfferID,
                HumanYn: item.attributes.HumanYn,
                FreelanceYn: item.attributes.FreelanceYn,
                Title: item.attributes.Title,
                CategoryTitle: item.attributes.CategoryTitle,
                ReadYn: item.attributes.ReadYn
            }).getView();
            w.setOID(item.attributes.OfferID);
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
            w.setOID(item.attributes.OfferID);
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
