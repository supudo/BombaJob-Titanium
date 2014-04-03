function doSearch() {
    if (Titanium.Network.online) {
        var url = Alloy.Globals.ServicesURL;
        var urlParams = "action=searchOffers";
        urlParams += "&keyword=" + searchKeyword;
        urlParams += "&freelance=" + (searchFreelance ? "1" : "0");
        url += "?" + urlParams;
        Alloy.Globals.LogThis("Search URL - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                null != this.responseText && processSearch(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.open("GET", url);
        xhr.send(urlParams);
    } else alert(L("noInternet"));
}

function processSearch(jsonText) {
    Alloy.Globals.LogThis(jsonText);
    var dbOffers = Alloy.Collections.Offers;
    var json = JSON.parse(jsonText);
    var off;
    if (0 == json.searchOffers.length) delegateSyncError({
        error: L("searchNoResults")
    }); else {
        for (i = 0; json.searchOffers.length > i; i++) {
            off = json.searchOffers[i];
            var ent = Alloy.createModel("Offer", {
                OfferID: off.id,
                CategoryID: off.cid,
                Positivism: off.positivism,
                Title: off.title,
                Negativism: off.negativism,
                CategoryTitle: off.category,
                Email: off.email,
                HumanYn: off.hm,
                FreelanceYn: off.fyn,
                PublishDate: off.date,
                PublishDateStamp: off.datestamp
            });
            dbOffers.add(ent);
            ent.save();
        }
        delegateSyncFinished();
    }
}

function fetchTextContent() {
    if (Titanium.Network.online) {
        var url = Alloy.Globals.ServicesURL + "?action=getTextContent";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                null != this.responseText && processTextContent(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.open("GET", url);
        xhr.send("action=getTextContent");
    } else alert(L("noInternet"));
}

function fetchCategories() {
    if (Titanium.Network.online) {
        var url = Alloy.Globals.ServicesURL + "?action=getCategories";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                null != this.responseText && processCategories(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.open("GET", url);
        xhr.send();
    } else alert(L("noInternet"));
}

function fetchOffers() {
    if (Titanium.Network.online) {
        var url = Alloy.Globals.ServicesURL + "?action=getNewJobs";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                null != this.responseText && processOffers(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.open("GET", url);
        xhr.send();
    } else alert(L("noInternet"));
}

function processTextContent(jsonText) {
    Alloy.Globals.LogThis(jsonText);
    var dbTextContent = Alloy.Collections.TextContent;
    var json = JSON.parse(jsonText);
    var txt;
    for (i = 0; json.getTextContent.length > i; i++) {
        txt = json.getTextContent[i];
        var ent = Alloy.createModel("TextContent", {
            TextContentID: txt.id,
            Title: txt.title,
            Content: txt.content
        });
        dbTextContent.add(ent);
        ent.save();
    }
    fetchCategories();
}

function processCategories(jsonText) {
    Alloy.Globals.LogThis(jsonText);
    var dbCategories = Alloy.Collections.Categories;
    var json = JSON.parse(jsonText);
    var cat;
    for (i = 0; json.getCategories.length > i; i++) {
        cat = json.getCategories[i];
        var ent = Alloy.createModel("Category", {
            CategoryID: cat.id,
            CategoryTitle: cat.name,
            OffersCount: cat.offerCount
        });
        dbCategories.add(ent);
        ent.save();
    }
    fetchOffers();
}

function processOffers(jsonText) {
    Alloy.Globals.LogThis(jsonText);
    var dbOffers = Alloy.Collections.Offers;
    var json = JSON.parse(jsonText);
    var off;
    for (i = 0; json.getNewJobs.length > i; i++) {
        off = json.getNewJobs[i];
        var ent = Alloy.createModel("Offer", {
            OfferID: off.id,
            CategoryID: off.cid,
            Positivism: off.positivism,
            Title: off.title,
            Negativism: off.negativism,
            CategoryTitle: off.category,
            Email: off.email,
            HumanYn: off.hm,
            FreelanceYn: off.fyn,
            PublishDate: off.date,
            PublishDateStamp: off.datestamp
        });
        dbOffers.add(ent);
        ent.save();
    }
    delegateSyncFinished();
}

var delegateSyncFinished, delegateSyncError;

var searchKeyword, searchFreelance;

exports.startSync = function(o, u) {
    delegateSyncFinished = o;
    delegateSyncError = u;
    fetchTextContent();
};

exports.startSearch = function(sk, sf, o, u) {
    searchKeyword = sk;
    searchFreelance = sf;
    delegateSyncFinished = o;
    delegateSyncError = u;
    doSearch();
};