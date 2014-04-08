var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            CategoryID: "INTEGER PRIMARY KEY AUTOINCREMENT",
            CategoryTitle: "TEXT",
            OffersCount: "INTEGER"
        },
        adapter: {
            type: "sql",
            collection_name: "Categories",
            idAttribute: "CategoryID"
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
            comparator: function(cat) {
                return cat.get(this.sortField);
            },
            initialize: function() {
                this.sortField = "CategoryTitle";
                this.sortDirection = "ASC";
            },
            setSortField: function(field, direction) {
                this.sortField = field;
                this.sortDirection = direction;
            },
            sortBy: function(iterator, context) {
                var obj = this.models;
                var direction = this.sortDirection;
                return _.pluck(_.map(obj, function(value, index, list) {
                    return {
                        value: value,
                        index: index,
                        criteria: iterator.call(context, value, index, list)
                    };
                }).sort(function(left, right) {
                    var a = "ASC" === direction ? left.criteria : right.criteria;
                    var b = "ASC" === direction ? right.criteria : left.criteria;
                    if (a !== b) {
                        if (a > b || void 0 === a) return 1;
                        if (b > a || void 0 === b) return -1;
                    }
                    return left.index < right.index ? -1 : 1;
                }), "value");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Category", exports.definition, []);

collection = Alloy.C("Category", exports.definition, model);

exports.Model = model;

exports.Collection = collection;