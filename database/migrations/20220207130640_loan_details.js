
exports.up = function(knex) {
    return knex.schema
    .createTable('loan_details',table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().nullable();
        table.foreign('user_id').references('user.id');
        table.string('loan_amount')
        table.string('Total_amount')
        table.string('loan_type')
        table.string('months')
        table.string('loan_emi')
        table.string('ROI')
        table.string('sention_date')
        table.timestamps(true,true);
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('loan_details')
  
};
