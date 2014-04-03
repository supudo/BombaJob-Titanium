var sync_manager = require('SyncManager');

$.index.open();
$.acView.show();

startSync();

function startSync() {
    if (Ti.App.Properties.getBool('BJSettingInitSync'))
        sync_manager.startSync(syncFinished, syncError);
    else
        syncFinished();
}

function syncFinished() {
    Alloy.createController("tabs").getView().open();
}

function syncError(e) {
    Alloy.Globals.LogThis(e.error);

    var dialog = Ti.UI.createAlertDialog({
        cancel : 1,
        buttonNames : [L('retry_alertbox'), L('close_alertbox')],
        message : ((e.error != undefined) ? e.error : ""),
        title : L('generic_error')
    });
    dialog.addEventListener('click', function(e) {
        if (e.index === e.source.cancel)
            syncFinished();
        else
            startSync();
    });
    dialog.show();
}
