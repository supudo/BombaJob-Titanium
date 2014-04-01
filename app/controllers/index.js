var sync_manager = require('SyncManager');

$.index.open();
$.acView.show();

startSync();

function startSync() {
    sync_manager.startSync(syncFinished, syncError);
}

function syncFinished() {
    Alloy.createController("tabs").getView().open();
}

function syncError(e) {
    Alloy.Globals.LogThis(e.error);
    alert(L('generic_error') + " " + e.error);
}
