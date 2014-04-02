var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            OfferID: "INTEGER PRIMARY KEY AUTOINCREMENT",
            CategoryID: "INTEGER",
            Positivism: "TEXT",
            Title: "TEXT",
            Negativism: "TEXT",
            CategoryTitle: "TEXT",
            Email: "TEXT",
            HumanYn: "INTEGER",
            FreelanceYn: "INTEGER",
            ReadYn: "INTEGER",
            SentMessageYn: "INTEGER",
            PublishDate: "TEXT",
            PublishDateStamp: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "Offers",
            idAttribute: "OfferID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) if ("OfferID" === key) {
                        if (0 >= value) return "Error: No Offer ID!";
                    } else if ("CategoryID" === key) {
                        if (0 >= value) return "Error: No Category ID!";
                    } else if ("Title" === key && 0 >= value.length) return "Error: No Title!";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(offer) {
                return offer.get("OfferID");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Offer", exports.definition, []);

collection = Alloy.C("Offer", exports.definition, model);

exports.Model = model;

exports.Collection = collection;