import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Comment } from "../comment/comment.model";


interface UserCreateAttr {

}

@Table({tableName: 'user', timestamps: false})
export class User extends Model<User, UserCreateAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  login: string


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string


  @HasMany(() => Comment)
  Comments: Array<Comment>
}

