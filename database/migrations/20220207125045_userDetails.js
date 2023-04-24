
exports.up = function(knex) {
    return knex.schema
    .createTable('user_details',table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().nullable();
        table.foreign('user_id').references('user.id');
        table.string('occupation')
        table.string('income')
        table.string('pan')
        table.string('adharcard')
        table.string('address')
        table.timestamps(true,true);
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable()
  
};
