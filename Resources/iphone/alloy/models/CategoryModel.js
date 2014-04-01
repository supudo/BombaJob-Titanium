var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            CID: "INTEGER PRIMARY KEY AUTOINCREMENT",
            CategoryID: "integer",
            CategoryTitle: "text",
            OffersCount: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Categories",
            idAttribute: "CID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) if ("CategoryID" === key) {
                        if (0 >= value) return "Error: No Category ID!";
                    } else if ("CategoryTitle" === key && 0 >= value.length) return "Error: No Category Title!";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(category) {
                return category.get("CategoryID");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("CategoryModel", exports.definition, []);

collection = Alloy.C("CategoryModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;