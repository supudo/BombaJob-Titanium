function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("about"),
        backButtonTitle: "",
        id: "__alloyId0"
    });
    $.__views.wvContent = Ti.UI.createWebView({
        id: "wvContent"
    });
    $.__views.__alloyId0.add($.__views.wvContent);
    $.__views.tbAbout = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        id: "tbAbout",
        title: L("about"),
        icon: "tb_about.png"
    });
    $.__views.tbAbout && $.addTopLevelView($.__views.tbAbout);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbTC = Alloy.Collections.TextContent;
    dbTC && dbTC.fetch();
    var t = dbTC.where({
        TextContentID: 35
    });
    var ent = t[0];
    if (null != ent && null != ent.attributes) {
        var htmlContent = '<html><style>html,body {font-family: Ubuntu; font-size: 16px; color: #000000; margin: 0px; padding: 0px;} a {color: #000000; text-decoration: underline;} </style><body><div style="padding: 10px; width: 295px;">';
        htmlContent += ent.attributes.Content;
        htmlContent += '<br /><br /><br /><a href="http://' + Alloy.Globals.SiteURL + '/">BombaJob.bg</a>';
        htmlContent += "</div></body></html>";
        $.wvContent.setHtml(htmlContent, null);
        $.wvContent.backgroundColor = "transparent";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;