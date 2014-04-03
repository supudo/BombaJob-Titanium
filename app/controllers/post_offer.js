var dbCategories = Alloy.Collections.Categories;
dbCategories && dbCategories.fetch();

var humanYn = -1, cid = -1, fyn = -1;

function switchLabels(hmyn) {
    if (hmyn == 0) {
        $.btnPostHumanYn.title = L('post_HumanCompany_H');
        $.btnPostCategory.title = L('post_Category_Human');
        $.btnPostFreelance.title = L('searchFreelance');
        $.lblPostTitle.text = L('post_Human_Title');
        $.lblPostEmail.text = L('post_Human_Email');
        $.lblPostPositiv.text = L('post_Human_Positiv');
        $.lblPostNegativ.text = L('post_Human_Negativ');
    }
    else {
        $.btnPostHumanYn.title = L('post_HumanCompany_C');
        $.btnPostCategory.title = L('post_Category_Company');
        $.btnPostFreelance.title = L('searchFreelance');
        $.lblPostTitle.text = L('post_Company_Title');
        $.lblPostEmail.text = L('post_Company_Email');
        $.lblPostPositiv.text = L('post_Company_Positiv');
        $.lblPostNegativ.text = L('post_Company_Negativ');
    }
}

function showCategory() {
    $.btnPostCategory.title = dbCategories.models[cid].attributes.CategoryTitle;
}

function showFreelance() {
    if (fyn == 1)
        $.btnPostFreelance.title = L('postComboFreelanceN');
    else
        $.btnPostFreelance.title = L('postComboFreelanceY');
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
        switchLabels(humanYn);
        pkViewHuman.hide();
    });
    pkViewHuman.add(btnOKHuman);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_H'), value: 0}));
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_C'), value: 1}));
    var pickerHuman = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    pickerHuman.setSelectedRow(0, humanYn, false);
    pickerHuman.add(data);
    pickerHuman.addEventListener('change', function(e) {
        if (e != null && e.row != null && e.row.value != null)
            humanYn = e.row.value;
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
        showCategory();
        pkViewCategory.hide();
    });
    pkViewCategory.add(btnOKCategory);

    var data = [];
    for (i=0; i<dbCategories.models.length; i++) {
        data.push(Titanium.UI.createPickerRow({
            title: dbCategories.models[i].attributes.CategoryTitle,
            value: i
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
        if (e != null && e.row != null && e.row.value != null)
            cid = e.row.value;
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
        showFreelance();
        pkViewFreelance.hide();
    });
    pkViewFreelance.add(btnOKFreelance);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('postComboFreelanceY'), value: 0}));
    data.push(Titanium.UI.createPickerRow({title: L('postComboFreelanceN'), value: 1}));
    var pickerFreelance = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    pickerFreelance.setSelectedRow(0, fyn, false);
    pickerFreelance.add(data);
    pickerFreelance.addEventListener('change', function(e) {
        if (e != null && e.row != null && e.row.value != null)
            fyn = e.row.value;
    });
    pkViewFreelance.add(pickerFreelance);

    $.wPost.add(pkViewFreelance);
});
