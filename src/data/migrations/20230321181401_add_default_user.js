exports.up = function(knex) {
  return knex('users').insert({
    email: 'danilo@danilo.com',
    password: 'danilo@danilo.com',
    name: 'Danilo Roque'
  });
};

exports.down = function(knex) {
  return knex('users')
    .where('email', 'danilo@danilo.com')
    .del();
};
