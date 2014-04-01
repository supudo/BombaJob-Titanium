var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            OID: "INTEGER PRIMARY KEY AUTOINCREMENT",
            OfferID: "integer",
            CategoryID: "integer",
            Positivism: "text",
            Title: "string",
            Negativism: "text",
            CategoryTitle: "string",
            Email: "string",
            HumanYn: "boolean",
            FreelanceYn: "boolean",
            ReadYn: "boolean",
            SentMessageYn: "boolean",
            PublishDate: "datetime"
        },
        adapter: {
            type: "sql",
            collection_name: "Offers",
            idAttribute: "OID"
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

model = Alloy.M("OfferModel", exports.definition, []);

collection = Alloy.C("OfferModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;