function Controller() {
    function switchLabels() {
        if (2 == humanYn) {
            $.btnPostHumanYn.title = L("post_HumanCompany_C");
            0 == cid && ($.btnPostCategory.title = L("post_Category_Company"));
            0 == fyn && ($.btnPostFreelance.title = L("post_Freelance"));
            $.lblPostTitle.text = L("post_Company_Title");
            $.lblPostEmail.text = L("post_Company_Email");
            $.lblPostPositiv.text = L("post_Company_Positiv");
            $.lblPostNegativ.text = L("post_Company_Negativ");
        } else {
            $.btnPostHumanYn.title = L("post_HumanCompany_H");
            0 == cid && ($.btnPostCategory.title = L("post_Category_Human"));
            0 == fyn && ($.btnPostFreelance.title = L("post_Freelance"));
            $.lblPostTitle.text = L("post_Human_Title");
            $.lblPostEmail.text = L("post_Human_Email");
            $.lblPostPositiv.text = L("post_Human_Positiv");
            $.lblPostNegativ.text = L("post_Human_Negativ");
        }
    }
    function showCategory() {
        $.btnPostCategory.title = 0 == cid ? 2 == humanYn ? L("post_Category_Company") : L("post_Category_Human") : dbCategories.models[cid - 1].attributes.CategoryTitle;
    }
    function showFreelance() {
        $.btnPostFreelance.title = 0 == fyn ? L("post_Freelance") : 1 == fyn ? L("postComboFreelanceY") : L("postComboFreelanceN");
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
        id: "btnPostFreelance",
        title: L("post_Freelance")
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
    $.__views.__alloyId9.add($.__views.lblPostNegativ);
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
    $.__views.__alloyId9.add($.__views.txtNegativ);
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
    $.__views.__alloyId10.add($.__views.lblPostPositiv);
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
    $.__views.__alloyId10.add($.__views.txtPositiv);
    $.__views.btnPost = Ti.UI.createButton({
        width: Ti.UI.FULL,
        height: "50dp",
        top: "20dp",
        left: "20dp",
        right: "20dp",
        bottom: "10dp",
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
    var string = require("alloy/string");
    var dbCategories = Alloy.Collections.Categories;
    dbCategories && dbCategories.fetch();
    var humanYn = 0, cid = 0, fyn = 0;
    $.btnPost.addEventListener("click", function() {
        if (humanYn > 0) {
            var vTitle = string.trim($.txtTitle.value);
            var vEmail = string.trim($.txtEmail.value);
            var vPositiv = string.trim($.txtPositiv.value);
            var vNegativ = string.trim($.txtNegativ.value);
            var valErrMessage = "";
            "" == vTitle ? valErrMessage = 0 == humanYn ? L("post_error_Human_Title") : L("post_error_Company_Title") : "" == vEmail ? valErrMessage = 0 == humanYn ? L("post_error_Human_Email") : L("post_error_Company_Email") : "" == vPositiv ? valErrMessage = 0 == humanYn ? L("post_error_Human_Negativ") : L("post_error_Company_Negativ") : "" == vNegativ ? valErrMessage = 0 == humanYn ? L("post_error_Human_Positiv") : L("post_error_Company_Positiv") : 0 >= cid ? valErrMessage = L("post_error_Category") : 0 >= fyn && (valErrMessage = L("post_error_Freelance"));
            if ("" == valErrMessage) Alloy.Globals.LogThis("Post ..."); else {
                Alloy.Globals.LogThis("Post error - " + valErrMessage);
                var dialog = Ti.UI.createAlertDialog({
                    cancel: 0,
                    buttonNames: [ L("close_alertbox") ],
                    message: valErrMessage,
                    title: L("generic_error")
                });
                dialog.addEventListener("click", function() {});
                dialog.show();
            }
        }
    });
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
            Alloy.Globals.LogThis("Saved humanYn (" + humanYn + ")");
            switchLabels();
            pkViewHuman.hide();
        });
        pkViewHuman.add(btnOKHuman);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_Choice"),
            value: 0
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_H"),
            value: 1
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_C"),
            value: 2
        }));
        var pickerHuman = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerHuman.setSelectedRow(0, humanYn, false);
        pickerHuman.add(data);
        pickerHuman.addEventListener("change", function(e) {
            if (null != e && null != e.row && null != e.row.value) {
                humanYn = e.row.value;
                Alloy.Globals.LogThis("Changed humanYn (" + humanYn + ")");
            }
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
            Alloy.Globals.LogThis("Saved cid (" + cid + ")");
            showCategory();
            pkViewCategory.hide();
        });
        pkViewCategory.add(btnOKCategory);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("post_Category_Human"),
            value: 0
        }));
        for (i = 0; dbCategories.models.length > i; i++) data.push(Titanium.UI.createPickerRow({
            title: dbCategories.models[i].attributes.CategoryTitle,
            value: i + 1
        }));
        var pickerCategory = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerCategory.setSelectedRow(0, cid, false);
        pickerCategory.add(data);
        pickerCategory.addEventListener("change", function(e) {
            if (null != e && null != e.row && null != e.row.value) {
                cid = e.row.value;
                Alloy.Globals.LogThis("Changed cid (" + cid + ")");
            }
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
            Alloy.Globals.LogThis("Saved fyn (" + fyn + ")");
            showFreelance();
            pkViewFreelance.hide();
        });
        pkViewFreelance.add(btnOKFreelance);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("post_Freelance"),
            value: 0
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("postComboFreelanceY"),
            value: 1
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("postComboFreelanceN"),
            value: 2
        }));
        var pickerFreelance = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        pickerFreelance.setSelectedRow(0, fyn, false);
        pickerFreelance.add(data);
        pickerFreelance.addEventListener("change", function(e) {
            if (null != e && null != e.row && null != e.row.value) {
                fyn = e.row.value;
                Alloy.Globals.LogThis("Saved cid (" + fyn + ")");
            }
        });
        pkViewFreelance.add(pickerFreelance);
        $.wPost.add(pkViewFreelance);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;