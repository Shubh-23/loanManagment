exports.up = function(knex) {
    return knex.schema
    .createTable('emi_details',table => {
        table.increments('id').primary();
        table.integer('loan_id').unsigned().nullable();
        table.foreign('loan_id').references('loan_details.id');
        table.string('SIP')
        table.string('Pay_date')
        table.timestamps(true,true);
        
    }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('emi_details')
};
