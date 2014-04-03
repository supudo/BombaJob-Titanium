function initSettings() {
    $.txtEmail.value = Ti.App.Properties.getString('BJSettingPrivateEmail');
    $.swInitSync.value = Ti.App.Properties.getString('BJSettingInitSync');
    $.swOnlineSearch.value = Ti.App.Properties.getString('BJSettingOnlineSearch');
    $.swShowCategories.value = Ti.App.Properties.getString('BJSettingShowCategories');
}

$.txtEmail.addEventListener('change', function() {
    Ti.App.Properties.setString('BJSettingPrivateEmail', $.txtEmail.value);
});

$.swInitSync.addEventListener('change', function(e) {
    Ti.App.Properties.setString('BJSettingInitSync', $.swInitSync.value);
});

$.swOnlineSearch.addEventListener('change', function(e) {
    Ti.App.Properties.setString('BJSettingOnlineSearch', $.swOnlineSearch.value);
});

$.swShowCategories.addEventListener('change', function(e) {
    Ti.App.Properties.setString('BJSettingShowCategories', $.swShowCategories.value);
});