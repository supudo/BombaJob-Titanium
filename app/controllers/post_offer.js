var string = require('alloy/string');
var sync_manager = require('SyncManager');
var loHud = require('LoadingOverlay');

var dbCategories = Alloy.Collections.Categories;
dbCategories && dbCategories.fetch();

var humanYn = 0, cid = 0, fyn = 0;
var hudLoading;

function setFields() {
    hudLoading = loHud.loadingOverlay(Alloy.Globals.navgroup);
    $.txtPositiv.value = Alloy.Globals.PostPositiv;
    $.txtNegativ.value = Alloy.Globals.PostNegativ;
    $.txtEmail.value = Ti.App.Properties.getString('BJSettingPrivateEmail');
    
    /*
    humanYn = 1;
    cid = 2;
    fyn = 1;
    $.txtTitle.value = 'aaaaa';
    $.txtPositiv.value = 'bbbb';
    $.txtNegativ.value = 'cccc';
    */
}

$.txtNegativ.addEventListener('focus', function(e) {
    var d = { h : humanYn, f: 0, t: $.txtNegativ.value };
    var w = Alloy.createController("post_details", {
        data: d,
        "$model": d
    });
    w.openDetails($.tbPost);
});

$.txtPositiv.addEventListener('focus', function(e) {
    var d = { h: humanYn, f: 1, t: $.txtPositiv.value };
    var w = Alloy.createController("post_details", {
        data: d,
        "$model": d
    });
    w.openDetails($.tbPost);
});

function switchLabels() {
    if (humanYn == 2) {
        $.btnPostHumanYn.title = L('post_HumanCompany_C');
        
        if (cid == 0)
            $.btnPostCategory.title = L('post_Category_Company');
            
        if (fyn == 0)
            $.btnPostFreelance.title = L('post_Freelance');
        
        $.lblPostTitle.text = L('post_Company_Title');
        $.lblPostEmail.text = L('post_Company_Email');
        $.lblPostPositiv.text = L('post_Company_Positiv');
        $.lblPostNegativ.text = L('post_Company_Negativ');
    }
    else {
        $.btnPostHumanYn.title = L('post_HumanCompany_H');
        
        if (cid == 0)
            $.btnPostCategory.title = L('post_Category_Human');
            
        if (fyn == 0)
            $.btnPostFreelance.title = L('post_Freelance');
        
        $.lblPostTitle.text = L('post_Human_Title');
        $.lblPostEmail.text = L('post_Human_Email');
        $.lblPostPositiv.text = L('post_Human_Positiv');
        $.lblPostNegativ.text = L('post_Human_Negativ');
    }
}

function showCategory() {
    if (cid == 0)
        $.btnPostCategory.title = (humanYn == 2 ? L('post_Category_Company') : L('post_Category_Human'));
    else
        $.btnPostCategory.title = dbCategories.models[cid - 1].attributes.CategoryTitle;
}

function showFreelance() {
    if (fyn == 0)
        $.btnPostFreelance.title = L('post_Freelance');
    else if (fyn == 1)
        $.btnPostFreelance.title = L('postComboFreelanceY');
    else
        $.btnPostFreelance.title = L('postComboFreelanceN');
}

$.btnPost.addEventListener('click', function(e) {
    if (humanYn > 0) {
        var vTitle = string.trim($.txtTitle.value);
        var vEmail = string.trim($.txtEmail.value);
        var vPositiv = string.trim($.txtPositiv.value);
        var vNegativ = string.trim($.txtNegativ.value);
        
        var valErrMessage = '';
        if (cid <= 0)
            valErrMessage = L('post_error_Category');
        else if (fyn <= 0)
            valErrMessage = L('post_error_Freelance');
        else if (vTitle == '')
            valErrMessage = (humanYn == 1 ? L('post_error_Human_Title') : L('post_error_Company_Title'));
        else if (vEmail == '')
            valErrMessage = (humanYn == 1 ? L('post_error_Human_Email') : L('post_error_Company_Email'));
        else if (vNegativ == '')
            valErrMessage = (humanYn == 1 ? L('post_error_Human_Negativ') : L('post_error_Company_Negativ'));
        else if (vPositiv == '')
            valErrMessage = (humanYn == 1 ? L('post_error_Human_Positiv') : L('post_error_Company_Positiv'));
            
        if (valErrMessage == '') {
            hudLoading.show(L('sending'));
            Alloy.Globals.LogThis("Post ...");
            Ti.App.Properties.setString('BJSettingPrivateEmail', vEmail);
            
            var joff = {
                h: (humanYn == 1 ? '1' : '0'),
                fr: (fyn == 1 ? '1' : '0'),
                cid: dbCategories.models[cid - 1].attributes.CategoryID,
                tt: vTitle,
                em: vEmail,
                pos: vPositiv,
                neg: vNegativ,
                glat: '0',
                glong: '0'
            };
            sync_manager.postOffer(joff, postFinished, postError);
        }
        else {
            Alloy.Globals.LogThis("Post error - " + valErrMessage);
            var dialog = Ti.UI.createAlertDialog({
                cancel : 0,
                buttonNames : [L('close_alertbox')],
                message : valErrMessage,
                title : L('generic_error')
            });
            dialog.addEventListener('click', function(e) {
            });
            dialog.show();
        }
    }
});

function postFinished(offid, dtstamp, dt) {
    Alloy.Globals.LogThis("Post done - " + offid + "!");

    var vTitle = string.trim($.txtTitle.value);
    var vEmail = string.trim($.txtEmail.value);
    var vPositiv = string.trim($.txtPositiv.value);
    var vNegativ = string.trim($.txtNegativ.value);

    var dbOffers = Alloy.Collections.Offers;
    var ent = Alloy.createModel('Offer', {
        OfferID: offid,
        CategoryID: cid - 1,
        Positivism: vPositiv,
        Title: vTitle,
        Negativism: vNegativ,
        CategoryTitle: dbCategories.models[cid - 1].attributes.CategoryTitle,
        Email: vEmail,
        HumanYn: (humanYn == 2 ? "0" : "1"),
        FreelanceYn: (fyn == 2 ? "0" : "1"),
        PublishDate: dt,
        PublishDateStamp: dtstamp
    });
    dbOffers.add(ent);
    ent.save();

    hudLoading.hide();
    
    var dialog = Ti.UI.createAlertDialog({
        cancel : 0,
        buttonNames : [L('close_alertbox')],
        message : L('post_OfferSuccess'),
        title : ''
    });
    dialog.addEventListener('click', function(e) {
        humanYn = 0;
        cid = 0;
        fyn = 0;
        $.txtTitle.value = '';
        $.txtEmail.value = '';
        $.txtPositiv.value = '';
        $.txtNegativ.value = '';
        Alloy.Globals.navgroup.setActiveTab(0);
    });
    dialog.show();
}

function postError(e) {
    hudLoading.hide();
    Alloy.Globals.LogThis("Post error - " + e.error + "!");
    if (e != null && e.error != null && e.error.indexOf('post_') >= 0)
        alert(L(e.error));
    else
        alert(L('generic_error'));
}

$.btnPostHumanYn.addEventListener('click', function(e) {
    var pkViewHuman = Titanium.UI.createView({ 
        height: '200dp',
        width: Ti.UI.FILL,
        bottom: 0,
        backgroundColor: '#fff',
        layout: 'vertical'
    });

    var btnOKHuman = Titanium.UI.createButton({
        title : L('close_alertbox'),
        color : '#df9368',
        font : { fontFamily:'Ubuntu', fontSize: '22dp', fontStyle: 'normal', fontWeight: 'bold' },
        width : Ti.UI.FILL,
        height : 44,
    });
    btnOKHuman.addEventListener('click', function(e) {
        Alloy.Globals.LogThis("Saved humanYn (" + humanYn + ")");
        switchLabels();
        pkViewHuman.hide();
    });
    pkViewHuman.add(btnOKHuman);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_Choice'), value: 0}));
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_H'), value: 1}));
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_C'), value: 2}));
    var pickerHuman = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    pickerHuman.setSelectedRow(0, humanYn, false);
    pickerHuman.add(data);
    pickerHuman.addEventListener('change', function(e) {
        if (e != null && e.row != null && e.row.value != null) {
            humanYn = e.row.value;
            Alloy.Globals.LogThis("Changed humanYn (" + humanYn + ")");
        }
    });
    pkViewHuman.add(pickerHuman);

    $.wPost.add(pkViewHuman);
});

$.btnPostCategory.addEventListener('click', function(e) {
    var pkViewCategory = Titanium.UI.createView({ 
        height: '200dp',
        width: Ti.UI.FILL,
        bottom: 0,
        backgroundColor: '#fff',
        layout: 'vertical'
    });

    var btnOKCategory = Titanium.UI.createButton({
        title : L('close_alertbox'),
        color : '#df9368',
        font : { fontFamily:'Ubuntu', fontSize: '22dp', fontStyle: 'normal', fontWeight: 'bold' },
        width : Ti.UI.FILL,
        height : 44,
    });
    btnOKCategory.addEventListener('click', function(e) {
        Alloy.Globals.LogThis("Saved cid (" + cid + ")");
        showCategory();
        pkViewCategory.hide();
    });
    pkViewCategory.add(btnOKCategory);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('post_Category_Human'), value: 0}));
    for (i=0; i<dbCategories.models.length; i++) {
        data.push(Titanium.UI.createPickerRow({
            title: dbCategories.models[i].attributes.CategoryTitle,
            value: (i + 1)
        }));   
    }
    var pickerCategory = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    pickerCategory.setSelectedRow(0, cid, false);
    pickerCategory.add(data);
    pickerCategory.addEventListener('change', function(e) {
        if (e != null && e.row != null && e.row.value != null) {
            cid = e.row.value;
            Alloy.Globals.LogThis("Changed cid (" + cid + ")");
        }
    });
    pkViewCategory.add(pickerCategory);

    $.wPost.add(pkViewCategory);
});

$.btnPostFreelance.addEventListener('click', function(e) {
    var pkViewFreelance = Titanium.UI.createView({ 
        height: '200dp',
        width: Ti.UI.FILL,
        bottom: 0,
        backgroundColor: '#fff',
        layout: 'vertical'
    });

    var btnOKFreelance = Titanium.UI.createButton({
        title : L('close_alertbox'),
        color : '#df9368',
        font : { fontFamily:'Ubuntu', fontSize: '22dp', fontStyle: 'normal', fontWeight: 'bold' },
        width : Ti.UI.FILL,
        height : 44,
    });
    btnOKFreelance.addEventListener('click', function(e) {
        Alloy.Globals.LogThis("Saved fyn (" + fyn + ")");
        showFreelance();
        pkViewFreelance.hide();
    });
    pkViewFreelance.add(btnOKFreelance);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('post_Freelance'), value: 0}));
    data.push(Titanium.UI.createPickerRow({title: L('postComboFreelanceY'), value: 1}));
    data.push(Titanium.UI.createPickerRow({title: L('postComboFreelanceN'), value: 2}));
    var pickerFreelance = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    pickerFreelance.setSelectedRow(0, fyn, false);
    pickerFreelance.add(data);
    pickerFreelance.addEventListener('change', function(e) {
        if (e != null && e.row != null && e.row.value != null) {
            fyn = e.row.value;
            Alloy.Globals.LogThis("Saved cid (" + fyn + ")");
        }
    });
    pkViewFreelance.add(pickerFreelance);

    $.wPost.add(pkViewFreelance);
});
