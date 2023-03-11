import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Users.VAR_TABLE_NAME,
})
export class Users extends Model {
  public static VAR_TABLE_NAME = "users" as string;
  public static VAR_ID = "id" as string;
  public static VAR_NAME = "name" as string;
  public static VAR_PASSWORD = "password" as string;
  public static VAR_EMAIL = "email" as string;
  public static VAR_USERNAME = "username" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Users.VAR_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Users.VAR_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    field: Users.VAR_PASSWORD,
  })
  password!: string;

  @Column({
    type: DataType.STRING(100),
    field: Users.VAR_EMAIL,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: Users.VAR_USERNAME,
  })
  username!: string;
}
