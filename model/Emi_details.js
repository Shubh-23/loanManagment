const bookshelf = require('../database/db');


const emiDetails = bookshelf.model('emi_details',{
    tableName:'emi_details',
    idAttribute:"id",
})

module.exports = emiDetails


