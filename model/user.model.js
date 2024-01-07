const bookshelf = require('../database/db');


const admins = bookshelf.model('admins',{
    tableName:'admins',
    idAttribute:"Id",
})



module.exports = admins
