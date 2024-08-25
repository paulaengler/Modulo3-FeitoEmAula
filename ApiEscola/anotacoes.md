npm install

rodar migrations
npx sequelize-cli db:migrate

rodar aplicação
npm run dev

pasta models
criou arquivo User.js

primeiro criar o model, depois usar o model pra criar a migration
comando para criar a migration
npx sequelize-cli migration:generate --name create-user
(passar o nome ==== create-user)

altera o arquivo da migration
rodar migration -- npx sequelize-cli db:migrate

vai criar todos os models primeiro
role
Permission
PermissionRole 
UserRole
depois vai rodar as migrations de uma vez só