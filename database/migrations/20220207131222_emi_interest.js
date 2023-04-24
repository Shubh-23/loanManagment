

exports.up = function(knex) {
    return knex.schema
    .createTable('interest_rate',table => {
        table.increments('id').primary();
        table.string('loan_type')
        table.string('interest_rate')
    }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('interest_rate')
};
