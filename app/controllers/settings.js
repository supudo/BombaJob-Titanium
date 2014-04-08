function initSettings() {
    $.txtEmail.value = Ti.App.Properties.getString('BJSettingPrivateEmail', '');
    $.swInitSync.value = Ti.App.Properties.getBool('BJSettingInitSync', true);
    $.swOnlineSearch.value = Ti.App.Properties.getBool('BJSettingOnlineSearch', true);
    $.swShowCategories.value = Ti.App.Properties.getBool('BJSettingShowCategories', false);
}

$.txtEmail.addEventListener('change', function() {
    Ti.App.Properties.setString('BJSettingPrivateEmail', $.txtEmail.value);
});

$.swInitSync.addEventListener('change', function(e) {
    Ti.App.Properties.setBool('BJSettingInitSync', $.swInitSync.value);
});

$.swOnlineSearch.addEventListener('change', function(e) {
    Ti.App.Properties.setBool('BJSettingOnlineSearch', $.swOnlineSearch.value);
});

$.swShowCategories.addEventListener('change', function(e) {
    Ti.App.Properties.setBool('BJSettingShowCategories', $.swShowCategories.value);
});