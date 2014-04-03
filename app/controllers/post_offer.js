//$.post_offer.open();

var humanYn;

$.btnPostHumanYn.addEventListener('click', function(e) {
    var pkView = Titanium.UI.createView({ 
        height: '200dp',
        width: Ti.UI.FILL,
        bottom: 0,
        backgroundColor: '#fff',
        layout: 'vertical'
    });

    var btnOK = Titanium.UI.createButton({
        title : L('close_alertbox'),
        color : '#df9368',
        font : { fontFamily:'Ubuntu', fontSize: '22dp', fontStyle: 'normal', fontWeight: 'bold' },
        width : Ti.UI.FILL,
        height : 44,
    });
    btnOK.addEventListener('click', function(e) {
        if (humanYn == 0)
            $.btnPostHumanYn.title = L('post_HumanCompany_H');
        else
            $.btnPostHumanYn.title = L('post_HumanCompany_C');
        pkView.hide();
    });
    pkView.add(btnOK);

    var data = [];
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_H'), value: 0}));
    data.push(Titanium.UI.createPickerRow({title: L('post_HumanCompany_C'), value: 1}));
    var picker = Ti.UI.createPicker({
        width : Ti.UI.FILL,
        height: '100dp',
        top: 0,
    });
    picker.setSelectedRow(0, humanYn, false);
    picker.add(data);
    picker.addEventListener('change', function(e) {
        humanYn = e.row.value;
    });
    pkView.add(picker);

    $.wPost.add(pkView); 
});
