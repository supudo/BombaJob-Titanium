var moment = require('alloy/moment');

exports.definition = {
    config: {
        "columns": {
            "OfferID":"INTEGER PRIMARY KEY AUTOINCREMENT",
            "CategoryID": "INTEGER",
            "Positivism": "TEXT",
            "Title": "TEXT",
            "Negativism": "TEXT",
            "CategoryTitle": "TEXT",
            "Email": "TEXT",
            "HumanYn": "INTEGER",
            "FreelanceYn": "INTEGER",
            "ReadYn": "INTEGER",
            "SentMessageYn": "INTEGER",
            "PublishDate": "TEXT",
            "PublishDateStamp": "TEXT"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "Offers",
            "idAttribute": "OfferID"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {
            validate : function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if (key === "OfferID") {
                            if (value <= 0)
                                return 'Error: No Offer ID!';
                        }
                        else if (key === "CategoryID") {
                            if (value <= 0)
                                return 'Error: No Category ID!';
                        }
                        else if (key === "Title") {
                            if (value.length <= 0)
                                return 'Error: No Title!';
                        }
                    }
                }
            }
        });
        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(offer) {
                return offer.get(this.sortField);
            },
            initialize: function () {
                this.sortField = "OfferID";
                this.sortDirection = "DESC";
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