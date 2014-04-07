exports.openOfferMessage = function(_tab) {
    _tab.open($.wOfferMessage);
};

var args = arguments[0] || {};

$.txtMessage.addEventListener('change', function(e) {
    Alloy.Globals.OfferMessage = $.txtMessage.value;
});

function openEdit() {
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
}
