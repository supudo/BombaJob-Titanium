var moment = require('alloy/moment');

exports.definition = {
    config: {
        "columns": {
            "TID": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "TextContentID": "INTEGER",
            "Title": "TEXT",
            "Content": "TEXT"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "TextContent",
            "idAttribute": "TID"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {
            validate : function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if (key === "TextContentID") {
                            if (value <= 0)
                                return 'Error: No TextContent ID!';
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
            comparator: function(tc) {
                return tc.get('TID');
            }
        });
        return Collection;
    }
};