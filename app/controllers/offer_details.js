exports.openOfferDetails = function(_tab) {
    _tab.open($.wOfferDetails);
};

var args = arguments[0] || {};
var hasData = true;

if (args != null && args.$model != null)
    hasData = true;
 else
    hasData = false;
    
var offerModel;

if (hasData) {
    if (args.$model.attributes == null)
        offerModel = args.$model;
    else
        offerModel = args.$model.attributes;

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
    
    var dt = (hour < 10 ?"0" + hour : hour) + ":" + (minute < 10 ?"0" + minute : minute);
    dt += ", ";
    dt += day + " " + L('monthsLong_' + month) + " " + year;
    $.lblODate.text = dt;

    if (args.$model.attributes.FreelanceYn == 1)
        $.lblOFreelance.text = L('postComboFreelanceY');
    else
        $.lblOFreelance.text = L('postComboFreelanceN');

    $.lblONegativism.text = (parseInt(args.$model.attributes.HumanYn) == 1 ? L('post_Human_Negativ') : L('post_Company_Negativ'));
    $.lblONegativismV.text = args.$model.attributes.Negativism;
    
    $.lblOPositivism.text = (parseInt(args.$model.attributes.HumanYn) == 1 ? L('post_Human_Positiv') : L('post_Company_Positiv'));
    $.lblOPositivismV.text = args.$model.attributes.Positivism;
    
    var dbOffers = Alloy.Collections.Offers;
    dbOffers && dbOffers.fetch();
    var off = dbOffers.get(args.$model.attributes.OfferID);
    off.set({ "ReadYn": 1 }).save();

    if (OS_IOS) {
        var rbtn = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.ACTION
        });
        rbtn.addEventListener('click', function(e) {
            showShare();
        });
        $.wOfferDetails.rightNavButton = rbtn;
    }
    else {
        var activity = $.wOfferDetails.activity;
        activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var miSettings = menu.add({ title: L('contextmenu_share') });
            miSettings.setIcon("/images/tbsettings.png");
            miSettings.addEventListener("click", function(e) {
                showShare();
            });
        };
    }
}
else {
    $.lblOTitle.text = L('generic_error');
    $.lblOCategory.text = '';
    $.lblODate.text = '';
    $.lblOFreelance.text = '';
    $.lblOFreelanceV.text = '';
    $.lblONegativism.text = '';
    $.lblONegativismV.text = '';
    $.lblOPositivism.text = '';
    $.lblOPositivismV.text = '';
}

function showShare() {
    var dialog = Titanium.UI.createOptionDialog({
        options:[L('contextmenu_sharefb'), L('contextmenu_sharetw'), L('contextmenu_shareemail'), L('contextmenu_sendmessage'), L('message_btn_cancel')],
        destructive: 4,
        cancel: 1,
        title: L('contextmenu_share')
    });
    dialog.addEventListener('click', function(e) {
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
                break;
        }
    });
    dialog.show();
}

function sendMessage() {
    var omw = Alloy.createController("offer_message", {
        data: args.$model,
        "$model": args.$model,
        op: args.op
    });
    omw.openOfferMessage(args.op);
}

function shareEmail() {
    var emailBody = "";
    emailBody += args.$model.attributes.CategoryTitle + "<br /><br />";
    emailBody += "<b>" + args.$model.attributes.Title + "</b><br /><br />";
    emailBody += "<i>" + $.lblODate.text + "</i><br /><br />";
    emailBody += L('odetails_Freelance') + " " + (args.$model.attributes.FreelanceYn == "1" ? L('yes') : L('no')) + "<br /><br />";
    if (args.$model.attributes.HumanYn == "1") {
        emailBody += "<b>" + L('odetails_Human_Positiv') + "</b> " + args.$model.attributes.Positivism + "<br /><br />";
        emailBody += "<b>" + L('odetails_Human_Negativ') + "</b> " + args.$model.attributes.Negativism + "<br /><br />";
    }
    else {
        emailBody += "<b>" + L('odetails_Company_Positiv') + "</b> " + args.$model.attributes.Positivism + "<br /><br />";
        emailBody += "<b>" + L('odetails_Company_Negativ') + "</b> " + args.$model.attributes.Negativism + "<br /><br />";
    }
    emailBody += "<br /><br /> Sent from BombaJob ...";
    
    var emailDialog = Ti.UI.createEmailDialog();
    emailDialog.subject = L('email_subject');
    emailDialog.toRecipients = [];
    emailDialog.messageBody = emailBody;
    emailDialog.setHtml(true);
    emailDialog.open();
}

function shareFacebook() {
    if (OS_IOS) {
        var Social = require('dk.napp.social');
        if (!Social.isFacebookSupported())
            Alloy.Globals.LogThis('No Facebook!');
        else {
            var msg = "BombaJob.bg - " + args.$model.attributes.Title;
            msg += " " + Alloy.Globals.SiteURL + "/offer/" + args.$model.attributes.OfferID;
            msg += " #bombajobbg";
    
            Social.facebook({
                text: msg 
            });
        }
    }
}

function shareTwitter() {
    if (OS_IOS) {
        var Social = require('dk.napp.social');
        if (!Social.isTwitterSupported())
            Alloy.Globals.LogThis('No Twitter!');
        else {
            var tweet = "BombaJob.bg - " + args.$model.attributes.Title;
            tweet += " " + Alloy.Globals.SiteURL + "/offer/" + args.$model.attributes.OfferID;
            tweet += " #bombajobbg";
    
            Social.twitter({
                text: tweet 
            });
        }
    }
}
