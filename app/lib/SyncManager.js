
var delegateSyncFinished, delegateSyncError;

exports.startSync = function(o, u) {
    delegateSyncFinished = o;
    delegateSyncError = u;
    fetchTextContent();
};

function fetchTextContent() {
    if (!Titanium.Network.online)
        alert(L('noInternet'));
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getTextContent";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                processTextContent(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    
        xhr.open("GET", url);
        xhr.send("action=getTextContent");
    }
}

function fetchCategories() {
    if (!Titanium.Network.online)
        alert(L('noInternet'));
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getCategories";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                processCategories(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    
        xhr.open("GET", url);
        xhr.send();
    }
}

function fetchOffers() {
    if (!Titanium.Network.online)
        alert(L('noInternet'));
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getNewJobs";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                processOffers(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    
        xhr.open("GET", url);
        xhr.send();
    }
}

function processTextContent(jsonText) {
    Alloy.Globals.LogThis(jsonText);
    var dbTextContent = Alloy.Collections.TextContent;
    var json = JSON.parse(jsonText);
    var txt;
    for (i = 0; i < json.getTextContent.length; i++) {
        txt = json.getTextContent[i];
        var ent = Alloy.createModel('TextContent', {
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
    for (i = 0; i < json.getCategories.length; i++) {
        cat = json.getCategories[i];
        var ent = Alloy.createModel('Category', {
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
    for (i = 0; i < json.getNewJobs.length; i++) {
        off = json.getNewJobs[i];
        var ent = Alloy.createModel('Offer', {
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