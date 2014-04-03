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

/*
 * 
 * Search
 * 
 */

function doSearch() {
    if (!Titanium.Network.online)
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL;
        var urlParams = "action=searchOffers";
        urlParams += "&keyword=" + searchKeyword;
        urlParams += "&freelance=" + (searchFreelance ? "1" : "0");
        url += "?" + urlParams;
        Alloy.Globals.LogThis("Search URL - " + url);

        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                if (this.responseText != null)
                    processSearch(this.responseText);
            },
            onerror: function(e) {
                delegateSyncError(e);
            },
            timeout: Alloy.Globals.ConnectionTimeout,
            enableKeepAlive: false
        });
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    
        xhr.open("GET", url);
        xhr.send(urlParams);
    }
}

function processSearch(jsonText) {
    try {
        Alloy.Globals.LogThis(jsonText);
        var dbOffers = Alloy.Collections.Offers;
        var json = JSON.parse(jsonText);
        var off;
        if (json.searchOffers.length == 0)
            delegateSyncError({error: L('searchNoResults')});
        else {
            for (i = 0; i < json.searchOffers.length; i++) {
                off = json.searchOffers[i];
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
    }
    catch (e) {
        Alloy.Globals.LogThis("processSearch error : " + e.error);
        delegateSyncError(e);
    }
}

/*
 * 
 * Initial synchronization
 * 
 */

function fetchTextContent() {
    if (!Titanium.Network.online)
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getTextContent";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                if (this.responseText != null)
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
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getCategories";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                if (this.responseText != null)
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
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL + "?action=getNewJobs";
        Alloy.Globals.LogThis("Sync - " + url);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                if (this.responseText != null)
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
    try {
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
    catch (e) {
        Alloy.Globals.LogThis("processTextContent error : " + e.error);
        delegateSyncError(e);
    }
}

function processCategories(jsonText) {
    try {
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
    catch (e) {
        Alloy.Globals.LogThis("processCategories error : " + e.error);
        delegateSyncError(e);
    }
}

function processOffers(jsonText) {
    try {
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
    catch (e) {
        Alloy.Globals.LogThis("processOffers error : " + e.error);
        delegateSyncError(e);
    }
}