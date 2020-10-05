module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "123456",
  "database": "mutant",
  "synchronize": true,
  "entities":[
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ]
}
