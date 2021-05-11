import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './Schema'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { Users } from './Entities/Users'
require('dotenv').config();

const main = async () => {

  await createConnection({
    type: 'mysql',
    database: process.env.REACT_APP_DB_NAME,
    username: process.env.REACT_APP_DB_USERNAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    logging: true,
    synchronize: false,
    entities: [Users]
  })

  const app = express()
  app.use(cors())
  app.use(express.json())

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3001, () => {
    console.log('Server runing on port 3001')
  })
}

main().catch((err) => {
  console.log(err)
})
