const bookshelf = require('../database/db');


const categories = bookshelf.model('categories',{
    tableName:'categories',
    idAttribute:"id",
})

module.exports = categories


