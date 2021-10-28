import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Comment } from "../comment/comment.model";

interface PhotoCreateAttr {

}

@Table({tableName: 'photo', timestamps: false})
export class Photo extends Model<Photo, PhotoCreateAttr>{
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
  smallUrl: string


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  bigUrl: string



  @HasMany(() => Comment)
  comment: Array<Comment>
}

