import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "123456",
  port: 3306,
  database: "realworld",
  entities: [User],
  synchronize: true,
}).then(async (connection) => {
  const user = new User();
  user.email = "33333@qq.com";
  user.password = "123456";
  user.url = "http://www.cacsc.com";

  const repository = connection.getRepository(User);
  await repository.save(user);

  connection.close();
});
