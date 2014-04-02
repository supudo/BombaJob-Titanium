function fetchTextContent() {
    if (Titanium.Network.online) {
        var url = Alloy.Globals.ServicesURL + "?action=getTextContent";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                processTextContent(this.responseText);
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
                processCategories(this.responseText);
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
                processOffers(this.responseText);
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

exports.startSync = function(o, u) {
    delegateSyncFinished = o;
    delegateSyncError = u;
    fetchTextContent();
};