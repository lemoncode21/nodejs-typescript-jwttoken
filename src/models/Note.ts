import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Note.VAR_TABLE_NAME,
})
export class Note extends Model {
  public static VAR_TABLE_NAME = "note" as string;
  public static VAR_ID = "id" as string;
  public static VAR_NAME = "name" as string;
  public static VAR_DESCRIPTION = "description" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Note.VAR_ID,
  })
  id!: number;
  @Column({
    type: DataType.STRING,
    field: Note.VAR_NAME,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    field: Note.VAR_DESCRIPTION,
  })
  description!: string;
}
