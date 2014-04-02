var sync_manager = require('SyncManager');

$.acView.show();

function startSync() {
    Alloy.Globals.LogThis("SyncX start");
    sync_manager.startSync(syncFinished, syncError);
}

function syncFinished() {
    Alloy.Globals.LogThis("SyncX finish");
    //$.winSync.hide();
    //$.winSync.close();
    
    //$.tbSync.close($.winSync);
    //$.tbSync.closeWindow($.winSync);
    
    //Alloy.Globals.navgroup.close($.winSync);
    //Alloy.Globals.navgroup.close($.tbSync);
}

function syncError(e) {
    Alloy.Globals.LogThis(e.error);
    alert(L('generic_error') + " " + e.error);
}
