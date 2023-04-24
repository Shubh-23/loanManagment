const bookshelf = require('../database/db');
const emiDetails = require('./Emi_details')


const loanDetails = bookshelf.model('loan_details',{
    tableName:'loan_details',
    idAttribute:"id",

    emiDetails(){
        return this.hasMany(emiDetails,"loan_id")
    }
})



module.exports = loanDetails
