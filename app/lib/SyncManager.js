var delegateSyncFinished, delegateSyncError;
var searchKeyword, searchFreelance, joff, offid, omessage;

exports.startSync = function(o, u) {
    delegateSyncFinished = o;
    delegateSyncError = u;
    fetchTextContent();
};

exports.postOffer = function(off, o, u) {
    joff = off;
    delegateSyncFinished = o;
    delegateSyncError = u;
    doPostOffer();
};

exports.startSearch = function(sk, sf, o, u) {
    searchKeyword = sk;
    searchFreelance = sf;
    delegateSyncFinished = o;
    delegateSyncError = u;
    doSearch();
};

exports.sendOfferMessage = function(oid, msg, o, u) {
    offid = oid;
    omessage = msg;
    delegateSyncFinished = o;
    delegateSyncError = u;
    doSendMessage();
};

/*
 * 
 * Offer Message
 * 
 */

function doSendMessage() {
    if (!Titanium.Network.online)
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL;
        var urlParams = "?action=postMessage&oid=" + offid;
        url += urlParams;
        Alloy.Globals.LogThis("Offer Message URL - " + url);
    
        var m = { msg: omessage };
        var params = { jsonobj : JSON.stringify(m) };
        Alloy.Globals.LogThis("Offer Message - " + "jsonobj=" + JSON.stringify(m));

        var xhr = Ti.Network.createHTTPClient();
        xhr.open("POST", url);
        xhr.onload = function() {
            if (this.responseText != null)
                processOfferMessage(this.responseText);
        };
        xhr.onerror = function(e) {
            Alloy.Globals.LogThis("Offer Message - " + e.error);
            delegateSyncError(e);
        };
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function processOfferMessage(jsonText) {
    try {
        Alloy.Globals.LogThis(jsonText);
        var json = JSON.parse(jsonText);
        if (json.postMessage == 'true')
            delegateSyncFinished();
        else
            delegateSyncError({error: json.postNewJob.result});
    }
    catch (e) {
        Alloy.Globals.LogThis("processOfferMessage error : " + e.error);
        delegateSyncError(e);
    }
}

/*
 * 
 * Post
 * 
 */

function doPostOffer() {
    if (!Titanium.Network.online)
        delegateSyncError({error: L('noInternet')});
    else {
        var url = Alloy.Globals.ServicesURL;
        var urlParams = "?action=postNewJob";
        url += urlParams;
        Alloy.Globals.LogThis("Post URL - " + url);
    
        var params = { jsonobj : JSON.stringify(joff) };
        Alloy.Globals.LogThis("Post Data - " + "jsonobj=" + JSON.stringify(joff));

        var xhr = Ti.Network.createHTTPClient();
        xhr.open("POST", url);
        xhr.onload = function() {
            if (this.responseText != null)
                processPost(this.responseText);
        };
        xhr.onerror = function(e) {
            Alloy.Globals.LogThis("Post Error - " + e.error);
            delegateSyncError(e);
        };
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function processPost(jsonText) {
    try {
        Alloy.Globals.LogThis(jsonText);
        var dbOffers = Alloy.Collections.Offers;
        var json = JSON.parse(jsonText);
        if (json.postNewJob.result == 'true')
            delegateSyncFinished(json.postNewJob.last_id, json.postNewJob.last_date_stamp, json.postNewJob.last_date);
        else
            delegateSyncError({error: json.postNewJob.result});
    }
    catch (e) {
        Alloy.Globals.LogThis("processPost error : " + e.error);
        delegateSyncError(e);
    }
}

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