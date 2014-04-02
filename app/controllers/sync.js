var sync_manager = require('SyncManager');

$.acView.show();

function startSync() {
    sync_manager.startSync(syncFinished, syncError);
}

function syncFinished() {
    Alloy.Globals.navgroup.setActiveTab(0);
}

function syncError(e) {
    Alloy.Globals.LogThis(e.error);
    alert(L('generic_error') + " " + e.error);
}
