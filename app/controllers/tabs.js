var sync_manager = require('SyncManager');

function doOpen() {
    if (OS_ANDROID) {
        var activity = $.tbMenu.activity;
    
        if (activity.actionBar)
            activity.actionBar.title = L('app_name');
    
        activity.onCreateOptionsMenu = function(e) {
            var menuItem = e.menu.add({
                title : "Add Task",
                showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon : (Ti.Android.R.drawable.ic_menu_share ? Ti.Android.R.drawable.ic_menu_share : "my_search.png")
            });
            menuItem.addEventListener("click", function(e) {
                var txt = "Alloy Action Jackson. It's Time for Action. https://github.com/adampax/AlloyActionJackson";
                var intent = Ti.Android.createIntent({
                    action : Ti.Android.ACTION_SEND,
                    type : "text/plain"
                });
    
                intent.putExtra(Ti.Android.EXTRA_TEXT, txt);
                intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
                try {
                    Ti.Android.currentActivity.startActivity(intent);
                }
                catch (ex) {
                    Ti.UI.createNotification({
                        message : 'Complete action using -- Hey, install some sharing apps!'
                    }).show();
                }
            });
        };
    }
}

if (OS_IOS) {
    $.tbMenu.open();
    Alloy.Globals.navgroup = $.tbMenu;
}
else
    $.tbMenu.open();

$.tbMenu.addEventListener("focus", function(e) {
    if (e.index == 7) {
        Alloy.Globals.LogThis("Sync press");
        //$.acView.show();
        //startSync();
    }
});

function startSync() {
    Alloy.Globals.LogThis("Sync start");
    sync_manager.startSync(syncFinished, syncError);
}

function syncFinished() {
    Alloy.Globals.LogThis("Sync finish");
    
    //$.winSync.hide();
    //$.winSync.close();
    
    //$.tbSync.close($.winSync);
    //$.tbMenu.close($.winSync);
    
    //$.tbSync.closeWindow($.winSync);
    //$.tbMenu.closeWindow($.winSync);
    
    //Alloy.Globals.navgroup.close($.winSync);
    //Alloy.Globals.navgroup.close($.tbSync);
    
    //Alloy.Globals.navgroup.closeWindow($.winSync);
    //Alloy.Globals.navgroup.closeWindow($.tbSync);
    
    //Alloy.Globals.navgroup.setActiveTab(0);
}

function syncError(e) {
    Alloy.Globals.LogThis("Sync error - " + e.error);
    alert(L('generic_error') + " " + e.error);
}