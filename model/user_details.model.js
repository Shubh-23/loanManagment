const bookshelf = require('../database/db');


const userDetails = bookshelf.model('user_details',{
    tableName:'user_details',
    idAttribute:"id",
})

module.exports = userDetails


