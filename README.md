## Pacotes utilizados 

https://www.youtube.com/watch?v=JQuVdqFC1Xo

npx create-next-app@13.0.6 nextjs-login --use-npm
npm i jsonwebtoken@8.5.1
npm i cookies-next@2.1.1
npm install sqlite3 knex

npx knex migrate:make migration_name

npx knex migrate:latest --env development
npx knex migrate:make create_users
knex migrate:make add_default_user
