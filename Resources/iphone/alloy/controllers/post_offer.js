function Controller() {
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
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.wPost.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
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
        title: L("post_HumanCompany_H")
    });
    $.__views.__alloyId3.add($.__views.btnPostHumanYn);
    $.__views.__alloyId4 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("post_Human_Title"),
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
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
    $.__views.__alloyId4.add($.__views.txtTitle);
    $.__views.__alloyId6 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("post_Human_Email"),
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
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
    $.__views.__alloyId6.add($.__views.txtEmail);
    $.__views.__alloyId8 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId8"
    });
    $.__views.__alloyId2.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("post_Human_Positiv"),
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
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
    $.__views.__alloyId8.add($.__views.txtPositiv);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        right: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.__alloyId2.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.FULL,
        left: "10dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: L("post_Human_Negativ"),
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
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
    $.__views.__alloyId2.add($.__views.btnPost);
    $.__views.tbPost = Ti.UI.createTab({
        window: $.__views.wPost,
        id: "tbPost",
        title: L("post"),
        icon: "tb_postoffer.png"
    });
    $.__views.tbPost && $.addTopLevelView($.__views.tbPost);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var humanYn;
    $.btnPostHumanYn.addEventListener("click", function() {
        var pkView = Titanium.UI.createView({
            height: "200dp",
            width: Ti.UI.FILL,
            bottom: 0,
            backgroundColor: "#fff",
            layout: "vertical"
        });
        var btnOK = Titanium.UI.createButton({
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
        btnOK.addEventListener("click", function() {
            $.btnPostHumanYn.title = 0 == humanYn ? L("post_HumanCompany_H") : L("post_HumanCompany_C");
            pkView.hide();
        });
        pkView.add(btnOK);
        var data = [];
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_H"),
            value: 0
        }));
        data.push(Titanium.UI.createPickerRow({
            title: L("post_HumanCompany_C"),
            value: 1
        }));
        var picker = Ti.UI.createPicker({
            width: Ti.UI.FILL,
            height: "100dp",
            top: 0
        });
        picker.setSelectedRow(0, humanYn, false);
        picker.add(data);
        picker.addEventListener("change", function(e) {
            humanYn = e.row.value;
        });
        pkView.add(picker);
        $.wPost.add(pkView);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;