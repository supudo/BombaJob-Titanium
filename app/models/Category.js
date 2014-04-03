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
            comparator: function(category) {
                return category.get('CategoryID');
            }
        });
        return Collection;
    }
};