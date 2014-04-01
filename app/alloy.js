// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.InDebug = true;
Alloy.Globals.ServicesURL = "http://bombajob.supudo.net/_mob_service_json.php";
Alloy.Globals.SiteURL = "http://bombajob.supudo.net";
Alloy.Globals.ConnectionTimeout = 0;

if (OS_IOS || OS_ANDROID) {
    Alloy.Collections.Categories = Alloy.createCollection('Category');
    Alloy.Collections.Offers = Alloy.createCollection('Offer');
    Alloy.Collections.TextContent = Alloy.createCollection('TextContent');
}

Alloy.Globals.LogThis = function(txt) {
    if (Alloy.Globals.InDebug)
        Ti.API.info("[BOMBAJOB] " + txt);
};

Alloy.Globals.openSubWindow = function(e) {
    if (e.source.controller) {
        Ti.API.info(e.source.controller);
        Alloy.createController(e.source.controller).getView().open();
    }
    else {
        Alloy.Globals.LogThis('Err, No Controller Specified.');
        alert('Err, No Controller Specified!');
    }
};