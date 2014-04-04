exports.openDetails = function(_tab) {
    _tab.open($.wPostDetails);
};

var args = arguments[0] || {};

var t = '';
if (args.$model.h == 2) {
    if (args.$model.f == 0)
        t = L('post_Company_Negativ');
    else
        t = L('post_Company_Positiv');
}
else {
    if (args.$model.f == 0)
        t = L('post_Human_Negativ');
    else
        t = L('post_Human_Positiv');
}
$.lblPostTitle.text = t;

$.txtDetails.value = args.$model.t;

$.txtDetails.addEventListener('change', function(e) {
    if (args.$model.f == 0)
        Alloy.Globals.PostNegativ = $.txtDetails.value;
    else
        Alloy.Globals.PostPositiv = $.txtDetails.value;
});

function openEdit() {
    $.txtDetails.focus();
}
