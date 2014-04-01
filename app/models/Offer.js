var moment = require('alloy/moment');

exports.definition = {
    config: {
        "columns": {
            "OID": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "OfferID":"INTEGER",
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
            "idAttribute": "OID"
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
                return offer.get('OfferID');
            }
        });

        return Collection;
    }
};