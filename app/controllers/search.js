var sync_manager = require('SyncManager');
var string = require('alloy/string');

var searchKeyword, searchFreelance;

$.swFreelance.addEventListener('change', function(e) {
    Alloy.Globals.LogThis('Switch value: ' + $.swFreelance.value);
});

$.btnSearch.addEventListener('click', function(e) {
    searchKeyword = $.txtSearch.value;
    searchFreelance = $.swFreelance.value;
    if (string.trim(searchKeyword) != "") {        
        Alloy.Globals.LogThis("Search start...");
        sync_manager.startSearch(searchKeyword, searchFreelance, searchFinished, searchError);
    }
});

function searchFinished() {
    Alloy.Globals.LogThis("Search finish.");
    alert("Done!");
}

function searchError(e) {
    Alloy.Globals.LogThis("Search error - " + e.error + "!");
    alert(L('generic_error') + " " + e.error);
}
