const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const issueSchema = new Schema({

    IssueHeader : {
        type : String,
        required: true
    },

    StreetAddress : {
        type : String,
        required: true
    },

    City : {
        type : String,
        required: true
    },

    State : {
        type : String,
        required: true
    },

    Zip : {
        type : String,
        required: true
    },

    NameGEmployee : {
        type : String,
        required: true
    },

    GPosition : {
        type : String,
        required: true
    },

    PhoneNumber : {
        type : String,
        required: true
    },
    Description : {
        type : String,
        required: true
    },
    Image : {
        type : String,
        required: true
    }

})

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;