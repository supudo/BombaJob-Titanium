var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            TextContentID: "INTEGER PRIMARY KEY AUTOINCREMENT",
            Title: "TEXT",
            Content: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "TextContent",
            idAttribute: "TextContentID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) if ("TextContentID" === key) {
                        if (0 >= value) return "Error: No TextContent ID!";
                    } else if ("Title" === key && 0 >= value.length) return "Error: No Title!";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(tc) {
                return tc.get("TextContentID");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("TextContent", exports.definition, []);

collection = Alloy.C("TextContent", exports.definition, model);

exports.Model = model;

exports.Collection = collection;