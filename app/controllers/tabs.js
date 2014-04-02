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