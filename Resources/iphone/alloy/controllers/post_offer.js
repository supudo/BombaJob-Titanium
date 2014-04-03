function Controller() {
    function switchLabels(hmyn) {
        if (0 == hmyn) {
            $.btnPostHumanYn.title = L("post_HumanCompany_H");
            $.btnPostCategory.title = L("post_Category_Human");
            $.btnPostFreelance.title = L("searchFreelance");
            $.lblPostTitle.text = L("post_Human_Title");
            $.lblPostEmail.text = L("post_Human_Email");
            $.lblPostPositiv.text = L("post_Human_Positiv");
            $.lblPostNegativ.text = L("post_Human_Negativ");
        } else {
            $.btnPostHumanYn.title = L("post_HumanCompany_C");
            $.btnPostCategory.title = L("post_Category_Company");
            $.btnPostFreelance.title = L("searchFreelance");
            $.lblPostTitle.text = L("post_Company_Title");
            $.lblPostEmail.text = L("post_Company_Email");
            $.lblPostPositiv.text = L("post_Company_Positiv");
            $.lblPostNegativ.text = L("post_Company_Negativ");
        }
    }
    function showCategory() {
        $.btnPostCategory.title = dbCategories.models[cid].attributes.CategoryTitle;
    }
    function showFreelance() {
        $.btnPostFreelance.title = 1 == fyn ? L("postComboFreelanceN") : L("postComboFreelanceY");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "post_offer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wPost = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        id: "wPost",
        title: L("post"),
        backButtonTitle: ""
    });
    $.__views.__alloyId2 = Ti.UI.createScrollView({
        id: "__alloyId2"
    });
    $.__views.wPost.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.btnPostHumanYn = Ti.UI.createButton({
        width: Ti.UI.FULL,
        height: "40dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        backgroundColor: "#df9368",
        color: "#000",
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        horizontalWrap: true,
        id: "btnPostHumanYn",
        title: L("post_HumanCompany_Choice")
    });
    $.__views.__alloyId4.add($.__views.btnPostHumanYn);
    $.__views.__alloyId5 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.btnPostCategory = Ti.UI.createButton({
        width: Ti.UI.FULL,
        height: "40dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        backgroundColor: "#df9368",
        color: "#000",
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        horizontalWrap: true,
        id: "btnPostCategory",
        title: L("post_Category_Human")
    });
    $.__views.__alloyId5.add($.__views.btnPostCategory);
    $.__views.__alloyId6 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.btnPostFreelance = Ti.UI.createButton({
        width: Ti.UI.FULL,
        height: "40dp",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        backgroundColor: "#df9368",
        color: "#000",
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        horizontalWrap: true,
        id: "btnPostFreelance",
        title: L("searchFreelance")
    });
    $.__views.__alloyId6.add($.__views.btnPostFreelance);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.__alloyId3.add($.__views.__alloyId7);
    $.__views.lblPostTitle = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblPostTitle",
        text: L("post_Human_Title")
    });
    $.__views.__alloyId7.add($.__views.lblPostTitle);
    $.__views.txtTitle = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "32dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        autocorrect: false,
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtTitle"
    });
    $.__views.__alloyId7.add($.__views.txtTitle);
    $.__views.__alloyId8 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId8"
    });
    $.__views.__alloyId3.add($.__views.__alloyId8);
    $.__views.lblPostEmail = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblPostEmail",
        text: L("post_Human_Email")
    });
    $.__views.__alloyId8.add($.__views.lblPostEmail);
    $.__views.txtEmail = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "32dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        autocorrect: false,
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtEmail"
    });
    $.__views.__alloyId8.add($.__views.txtEmail);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.__alloyId3.add($.__views.__alloyId9);
    $.__views.lblPostPositiv = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblPostPositiv",
        text: L("post_Human_Positiv")
    });
    $.__views.__alloyId9.add($.__views.lblPostPositiv);
    $.__views.txtPositiv = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "32dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        autocorrect: false,
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtPositiv"
    });
    $.__views.__alloyId9.add($.__views.txtPositiv);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.__alloyId3.add($.__views.__alloyId10);
    $.__views.lblPostNegativ = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblPostNegativ",
        text: L("post_Human_Negativ")
    });
    $.__views.__alloyId10.add($.__views.lblPostNegativ);
    $.__views.txtNegativ = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "32dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        autocorrect: false,
        borderColor: "#000",
        borderRadius: "3dp",
        borderWidth: "1dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        id: "txtNegativ"
    });
    $.__views.__alloyId10.add($.__views.txtNegativ);
    $.__views.btnPost = Ti.UI.createButton({
        width: Ti.UI.FULL,
        height: "50dp",
        top: "20dp",
        left: "20dp",
        right: "20dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "btnPost",
        title: L("post_Button"),
        backgroundImage: "btn_boom.png"
    });
    $.__views.__alloyId3.add($.__views.btnPost);
    $.__views.tbPost = Ti.UI.createTab({
        window: $.__views.wPost,
        id: "tbPost",
        title: L("post"),
        icon: "tb_postoffer.png"
    });
    $.__views.tbPost && $.addTopLevelView($.__views.tbPost);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dbCategories = Alloy.Collections.Categories;
    dbCategories && dbCategories.fetch();
    var humanYn = -1, cid = -1, fyn = -1;
    $.btnPostHumanYn.addEventListener("click", function() {
        var pkViewHuman = Titanium.UI.createView({
            height: "200dp",
            width: Ti.UI.FILL,
            bottom: 0,
            backgroundColor: "#fff",
            layout: "vertical"
        });
        var btnOKHuman = Titanium.UI.createButton({
            title: L("close_alertbox"),
            color: "#df9368",
            font: {
                fontFamily: "Ubuntu",
                fontSize: "22dp",
                fontStyle: "normal",
                fontWeight: "bold"
            },
            width: Ti.UI.FILL,
            height: 44
        });
        btnOKHuman.addEventListener("click", function() {
            switchLabels(humanYn);
            pkViewHuman.hide();
        });
        pkViewHuman.add(btnOKHuman);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_H"),
            value: 0
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_C"),
            value: 1
        }));
        var pickerHuman = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerHuman.setSelectedRow(0, humanYn, false);
        pickerHuman.add(data);
        pickerHuman.addEventListener("change", function(e) {
            null != e && null != e.row && null != e.row.value && (humanYn = e.row.value);
        });
        pkViewHuman.add(pickerHuman);
        $.wPost.add(pkViewHuman);
    });
    $.btnPostCategory.addEventListener("click", function() {
        var pkViewCategory = Titanium.UI.createView({
            height: "200dp",
            width: Ti.UI.FILL,
            bottom: 0,
            backgroundColor: "#fff",
            layout: "vertical"
        });
        var btnOKCategory = Titanium.UI.createButton({
            title: L("close_alertbox"),
            color: "#df9368",
            font: {
                fontFamily: "Ubuntu",
                fontSize: "22dp",
                fontStyle: "normal",
                fontWeight: "bold"
            },
            width: Ti.UI.FILL,
            height: 44
        });
        btnOKCategory.addEventListener("click", function() {
            showCategory();
            pkViewCategory.hide();
        });
        pkViewCategory.add(btnOKCategory);
        var data = [];
        for (i = 0; dbCategories.models.length > i; i++) data.push(Titanium.UI.createPickerRow({
            title: dbCategories.models[i].attributes.CategoryTitle,
            value: i
        }));
        var pickerCategory = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerCategory.setSelectedRow(0, cid, false);
        pickerCategory.add(data);
        pickerCategory.addEventListener("change", function(e) {
            null != e && null != e.row && null != e.row.value && (cid = e.row.value);
        });
        pkViewCategory.add(pickerCategory);
        $.wPost.add(pkViewCategory);
    });
    $.btnPostFreelance.addEventListener("click", function() {
        var pkViewFreelance = Titanium.UI.createView({
            height: "200dp",
            width: Ti.UI.FILL,
            bottom: 0,
            backgroundColor: "#fff",
            layout: "vertical"
        });
        var btnOKFreelance = Titanium.UI.createButton({
            title: L("close_alertbox"),
            color: "#df9368",
            font: {
                fontFamily: "Ubuntu",
                fontSize: "22dp",
                fontStyle: "normal",
                fontWeight: "bold"
            },
            width: Ti.UI.FILL,
            height: 44
        });
        btnOKFreelance.addEventListener("click", function() {
            showFreelance();
            pkViewFreelance.hide();
        });
        pkViewFreelance.add(btnOKFreelance);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("postComboFreelanceY"),
            value: 0
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("postComboFreelanceN"),
            value: 1
        }));
        var pickerFreelance = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerFreelance.setSelectedRow(0, fyn, false);
        pickerFreelance.add(data);
        pickerFreelance.addEventListener("change", function(e) {
            null != e && null != e.row && null != e.row.value && (fyn = e.row.value);
        });
        pkViewFreelance.add(pickerFreelance);
        $.wPost.add(pkViewFreelance);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;