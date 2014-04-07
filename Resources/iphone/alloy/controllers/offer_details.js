function Controller() {
    function showShare() {
        var dialog = Titanium.UI.createOptionDialog({
            options: [ L("contextmenu_sharefb"), L("contextmenu_sharetw"), L("contextmenu_shareemail"), L("contextmenu_sendmessage"), L("message_btn_cancel") ],
            destructive: 4,
            cancel: 1,
            title: L("contextmenu_share")
        });
        dialog.addEventListener("click", function(e) {
            switch (e.index) {
              case 0:
                shareFacebook();
                break;

              case 1:
                shareTwitter();
                break;

              case 2:
                shareEmail();
                break;

              case 3:
                sendMessage();
            }
        });
        dialog.show();
    }
    function sendMessage() {
        var omw = Alloy.createController("offer_message", {
            data: args.$model,
            $model: args.$model,
            op: args.op
        });
        omw.openOfferMessage(args.op);
    }
    function shareEmail() {}
    function shareFacebook() {}
    function shareTwitter() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offer_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wOfferDetails = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wOfferDetails",
        backButtonTitle: "",
        title: L("title_Offer")
    });
    $.__views.wOfferDetails && $.addTopLevelView($.__views.wOfferDetails);
    $.__views.scDetails = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        id: "scDetails",
        disableBounce: "true"
    });
    $.__views.wOfferDetails.add($.__views.scDetails);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: "10dp",
        right: "10dp",
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.scDetails.add($.__views.__alloyId2);
    $.__views.lblOCategory = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#444",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblOCategory"
    });
    $.__views.__alloyId2.add($.__views.lblOCategory);
    $.__views.lblOTitle = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        color: "#df9368",
        top: "24dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "22dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "lblOTitle"
    });
    $.__views.__alloyId2.add($.__views.lblOTitle);
    $.__views.lblODate = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "italic",
            fontWeight: "italic"
        },
        top: "10dp",
        id: "lblODate"
    });
    $.__views.__alloyId2.add($.__views.lblODate);
    $.__views.lblOFreelance = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        top: "10dp",
        id: "lblOFreelance"
    });
    $.__views.__alloyId2.add($.__views.lblOFreelance);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "20dp",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.lblONegativism = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: "10dp",
        id: "lblONegativism",
        text: L("post_Human_Negativ")
    });
    $.__views.__alloyId3.add($.__views.lblONegativism);
    $.__views.lblONegativismV = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblONegativismV"
    });
    $.__views.__alloyId3.add($.__views.lblONegativismV);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.lblOPositivism = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: "10dp",
        id: "lblOPositivism",
        text: L("post_Human_Positiv")
    });
    $.__views.__alloyId4.add($.__views.lblOPositivism);
    $.__views.lblOPositivismV = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "left",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblOPositivismV"
    });
    $.__views.__alloyId4.add($.__views.lblOPositivismV);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openOfferDetails = function(_tab) {
        _tab.open($.wOfferDetails);
    };
    var args = arguments[0] || {};
    var hasData = true;
    hasData = null != args && null != args.$model ? true : false;
    var offerModel;
    if (hasData) {
        offerModel = null == args.$model.attributes ? args.$model : args.$model.attributes;
        $.lblOTitle.text = args.$model.attributes.Title;
        $.lblOCategory.text = args.$model.attributes.CategoryTitle;
        var darr = args.$model.attributes.PublishDate.split(" ");
        var mydarr = darr[0].split("-");
        var hmsarr = darr[1].split(":");
        var day = parseInt(mydarr[0], 10);
        var month = parseInt(mydarr[1], 10);
        var year = parseInt(mydarr[2], 10);
        var hour = parseInt(hmsarr[0], 10);
        var minute = parseInt(hmsarr[1], 10);
        var seconds = parseInt(hmsarr[2], 10);
        Alloy.Globals.LogThis(args.$model.attributes.PublishDate);
        Alloy.Globals.LogThis(day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + seconds);
        var dt = (10 > hour ? "0" + hour : hour) + ":" + (10 > minute ? "0" + minute : minute);
        dt += ", ";
        dt += day + " " + L("monthsLong_" + month) + " " + year;
        $.lblODate.text = dt;
        $.lblOFreelance.text = 1 == args.$model.attributes.FreelanceYn ? L("postComboFreelanceY") : L("postComboFreelanceN");
        $.lblONegativism.text = 1 == parseInt(args.$model.attributes.HumanYn) ? L("post_Human_Negativ") : L("post_Company_Negativ");
        $.lblONegativismV.text = args.$model.attributes.Negativism;
        $.lblOPositivism.text = 1 == parseInt(args.$model.attributes.HumanYn) ? L("post_Human_Positiv") : L("post_Company_Positiv");
        $.lblOPositivismV.text = args.$model.attributes.Positivism;
        var dbOffers = Alloy.Collections.Offers;
        dbOffers && dbOffers.fetch();
        var off = dbOffers.get(args.$model.attributes.OfferID);
        off.set({
            ReadYn: 1
        }).save();
        var rbtn = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.ACTION
        });
        rbtn.addEventListener("click", function() {
            showShare();
        });
        $.wOfferDetails.rightNavButton = rbtn;
    } else {
        $.lblOTitle.text = L("generic_error");
        $.lblOCategory.text = "";
        $.lblODate.text = "";
        $.lblOFreelance.text = "";
        $.lblOFreelanceV.text = "";
        $.lblONegativism.text = "";
        $.lblONegativismV.text = "";
        $.lblOPositivism.text = "";
        $.lblOPositivismV.text = "";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;