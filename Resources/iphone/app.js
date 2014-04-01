var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.InDebug = true;

Alloy.Globals.ServicesURL = "http://bombajob.supudo.net/_mob_service_json.php";

Alloy.Globals.SiteURL = "http://bombajob.supudo.net";

Alloy.Globals.ConnectionTimeout = 0;

Alloy.Collections.Categories = Alloy.createCollection("Category");

Alloy.Collections.Offers = Alloy.createCollection("Offer");

Alloy.Collections.TextContent = Alloy.createCollection("TextContent");

Alloy.Globals.LogThis = function(txt) {
    Alloy.Globals.InDebug && Ti.API.info("[BOMBAJOB] " + txt);
};

Alloy.Globals.openSubWindow = function(e) {
    if (e.source.controller) {
        Ti.API.info(e.source.controller);
        Alloy.createController(e.source.controller).getView().open();
    } else {
        Alloy.Globals.LogThis("Err, No Controller Specified.");
        alert("Err, No Controller Specified!");
    }
};

Alloy.createController("index");