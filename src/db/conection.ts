import { DataSource } from "typeorm";
// import { Users } from "src/entities/Users";
// import { Documents } from "src/entities/Documents";
import { Users, Documents } from '../entities'

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "practica_de_nuevo",
  entities: [Users, Documents],
  logging: true,
  synchronize: true,
})
