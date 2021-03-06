var sync_manager = require('SyncManager');
var string = require('alloy/string');

var searchKeyword, searchFreelance;

$.btnSearch.addEventListener('click', function(e) {
    searchKeyword = $.txtSearch.value;
    searchFreelance = $.swFreelance.value;
    if (string.trim(searchKeyword) != "" && searchKeyword.length >= 3) {
        Alloy.Globals.LogThis("Search start...");
        if (Ti.App.Properties.getBool('BJSettingOnlineSearch', true))
            sync_manager.startSearch(searchKeyword, searchFreelance, searchFinished, searchError);
        else
            openResults();
    }
});

function openResults() {
    Alloy.Globals.LogThis("Search finish.");
    var sObj = {
        keyword: searchKeyword,
        freelance: searchFreelance
    };
    var srw = Alloy.createController("search_results", {
        data: sObj,
        "$model": sObj,
        op: $.tbSearch
    });
    srw.openSearchResults($.tbSearch);
}

function searchFinished() {
    openResults();
}

function searchError(e) {
    Alloy.Globals.LogThis("Search error - " + e.error + "!");
    alert(L('generic_error') + " " + e.error);
}
