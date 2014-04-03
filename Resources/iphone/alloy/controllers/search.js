function Controller() {
    function openResults() {
        Alloy.Globals.LogThis("Search finish.");
        var sObj = {
            keyword: searchKeyword,
            freelance: searchFreelance
        };
        var srw = Alloy.createController("search_results", {
            data: sObj,
            $model: sObj,
            op: $.tbSearch
        });
        srw.openSearchResults($.tbSearch);
    }
    function searchFinished() {
        openResults();
    }
    function searchError(e) {
        Alloy.Globals.LogThis("Search error - " + e.error + "!");
        alert(L("generic_error") + " " + e.error);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId11 = Ti.UI.createWindow({
        navBarHidden: false,
        backgroundColor: "white",
        backgroundImage: "/bg-pattern.png",
        backgroundRepeat: true,
        verticalAlign: "center",
        navTintColor: "#df9368",
        title: L("search"),
        id: "__alloyId11"
    });
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.txtSearch = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: Ti.UI.FULL,
        height: "32dp",
        top: "20dp",
        left: "20dp",
        right: "20dp",
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
        id: "txtSearch",
        hintText: L("searchHint")
    });
    $.__views.__alloyId12.add($.__views.txtSearch);
    $.__views.vSearchFreelance = Ti.UI.createView({
        top: "20dp",
        left: "20dp",
        right: "20dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "vSearchFreelance"
    });
    $.__views.__alloyId12.add($.__views.vSearchFreelance);
    $.__views.lblSearchFreelance = Ti.UI.createLabel({
        left: "0dp",
        font: {
            fontFamily: "Ubuntu",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblSearchFreelance",
        text: L("searchFreelance")
    });
    $.__views.vSearchFreelance.add($.__views.lblSearchFreelance);
    $.__views.swFreelance = Ti.UI.createSwitch({
        right: "0dp",
        value: true,
        id: "swFreelance"
    });
    $.__views.vSearchFreelance.add($.__views.swFreelance);
    $.__views.btnSearch = Ti.UI.createButton({
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
        id: "btnSearch",
        title: L("search"),
        backgroundImage: "btn_boom.png"
    });
    $.__views.__alloyId12.add($.__views.btnSearch);
    $.__views.tbSearch = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        id: "tbSearch",
        title: L("search"),
        icon: "tb_search.png"
    });
    $.__views.tbSearch && $.addTopLevelView($.__views.tbSearch);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sync_manager = require("SyncManager");
    var string = require("alloy/string");
    var searchKeyword, searchFreelance;
    $.btnSearch.addEventListener("click", function() {
        searchKeyword = $.txtSearch.value;
        searchFreelance = $.swFreelance.value;
        if ("" != string.trim(searchKeyword) && searchKeyword.length >= 3) {
            Alloy.Globals.LogThis("Search start...");
            Ti.App.Properties.getBool("BJSettingOnlineSearch") ? sync_manager.startSearch(searchKeyword, searchFreelance, searchFinished, searchError) : openResults();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;