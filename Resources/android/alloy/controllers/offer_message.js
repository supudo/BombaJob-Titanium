function Controller() {
    function openEdit() {
        hudLoading = loHud.loadingOverlay(Alloy.Globals.navgroup);
        $.txtMessage.focus();
        var rbtn = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.SAVE
        });
        rbtn.addEventListener("click", function() {
            sendMessage();
        });
        $.wOfferMessage.rightNavButton = rbtn;
    }
    function sendMessage() {
        var msg = $.txtMessage.value;
        if ("" != string.trim(msg) && msg.length >= 6) {
            hudLoading.show(L("sending"));
            sync_manager.sendOfferMessage(args.$model.attributes.OfferID, msg, sendMessageFinished, sendMessageError);
        }
    }
    function sendMessageFinished() {
        Alloy.Globals.LogThis("Offer message sent!");
        hudLoading.hide();
        $.txtMessage.value = "";
        $.wOfferMessage.close();
    }
    function sendMessageError(e) {
        hudLoading.hide();
        Alloy.Globals.LogThis("Offer Message error - " + e.error + "!");
        null != e && null != e.error && e.error.indexOf("post_") >= 0 ? alert(L(e.error)) : alert(L("generic_error"));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offer_message";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wOfferMessage = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wOfferMessage",
        title: L("contextmenu_sendmessage"),
        backButtonTitle: ""
    });
    $.__views.wOfferMessage && $.addTopLevelView($.__views.wOfferMessage);
    openEdit ? $.__views.wOfferMessage.addEventListener("focus", openEdit) : __defers["$.__views.wOfferMessage!focus!openEdit"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.wOfferMessage.add($.__views.__alloyId5);
    $.__views.lblOMTitle = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblOMTitle",
        text: L("offerMessage_Placeholder")
    });
    $.__views.__alloyId5.add($.__views.lblOMTitle);
    $.__views.txtMessage = Ti.UI.createTextArea({
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: "auto",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtMessage",
        suppressReturn: "false"
    });
    $.__views.__alloyId5.add($.__views.txtMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sync_manager = require("SyncManager");
    var string = require("alloy/string");
    var loHud = require("LoadingOverlay");
    exports.openOfferMessage = function(_tab) {
        _tab.open($.wOfferMessage);
    };
    var args = arguments[0] || {};
    $.txtMessage.addEventListener("change", function() {
        Alloy.Globals.OfferMessage = $.txtMessage.value;
    });
    __defers["$.__views.wOfferMessage!focus!openEdit"] && $.__views.wOfferMessage.addEventListener("focus", openEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;