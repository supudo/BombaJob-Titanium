var sync_manager = require('SyncManager');
var string = require('alloy/string');
var loHud = require('LoadingOverlay');

exports.openOfferMessage = function(_tab) {
    _tab.open($.wOfferMessage);
};

var args = arguments[0] || {};

$.txtMessage.addEventListener('change', function(e) {
    Alloy.Globals.OfferMessage = $.txtMessage.value;
});

function openEdit() {
    hudLoading = loHud.loadingOverlay(Alloy.Globals.navgroup);

    $.txtMessage.focus();

    var rbtn = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.SAVE
    });
    rbtn.addEventListener('click', function(e) {
        sendMessage();
    });
    $.wOfferMessage.rightNavButton = rbtn;
}

function sendMessage() {
    var msg = $.txtMessage.value;
    if (string.trim(msg) != "" && msg.length >= 6) {
        hudLoading.show(L('sending'));
        sync_manager.sendOfferMessage(args.$model.attributes.OfferID, msg, sendMessageFinished, sendMessageError);
    }
}

function sendMessageFinished() {
    Alloy.Globals.LogThis("Offer message sent!");
    hudLoading.hide();
    $.txtMessage.value = '';
    $.wOfferMessage.close();
}

function sendMessageError(e) {
    hudLoading.hide();
    Alloy.Globals.LogThis("Offer Message error - " + e.error + "!");
    if (e != null && e.error != null && e.error.indexOf('post_') >= 0)
        alert(L(e.error));
    else
        alert(L('generic_error'));
}
