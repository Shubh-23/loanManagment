const bookshelf = require('../database/db');


const interestRate = bookshelf.model('interestRate',{
    tableName:'interest_rate',
    idAttribute:"id",
})



module.exports = interestRate
