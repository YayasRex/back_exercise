import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "practica_de_nuevo",
  entities: [],
  logging: true,
  synchronize: true,
})

export default dataSource;