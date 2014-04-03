var moment = require('alloy/moment');

exports.definition = {
    config: {
        "columns": {
            "CategoryID":"INTEGER PRIMARY KEY AUTOINCREMENT",
            "CategoryTitle":"TEXT",
            "OffersCount":"INTEGER"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "Categories",
            "idAttribute": "CategoryID"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {
            validate : function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if (key === "CategoryID") {
                            if (value <= 0)
                                return 'Error: No Category ID!';
                        }
                        else if (key === "CategoryTitle") {
                            if (value.length <= 0)
                                return 'Error: No Category Title!';
                        }
                    }
                }
            }
        });
        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(cat) {
                return cat.get(this.sortField);
            },
            initialize: function () {
                this.sortField = "CategoryTitle";
                this.sortDirection = "ASC";
            },
            setSortField: function (field, direction) {
                this.sortField = field;
                this.sortDirection = direction;
            },
            sortBy: function (iterator, context) {
                var obj = this.models;
                var direction = this.sortDirection;
                return _.pluck(_.map(obj, function (value, index, list) {
                    return {
                        value: value,
                        index: index,
                        criteria: iterator.call(context, value, index, list)
                    };
                }).sort(function (left, right) {
                    var a = direction === "ASC" ? left.criteria : right.criteria;
                    var b = direction === "ASC" ? right.criteria : left.criteria;
                    if (a !== b) {
                        if (a > b || a === void 0) return 1;
                        if (a < b || b === void 0) return -1;
                    }
                    return left.index < right.index ? -1 : 1;
                }), 'value');
            }
        });
        return Collection;
    }
};