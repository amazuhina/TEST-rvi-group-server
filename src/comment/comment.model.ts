import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../user/user.model";
import { Photo } from "../photo/photo.model";


interface CommentCreateAttr {
  content: string
}

@Table({tableName: 'comment', timestamps: false})
export class Comment extends Model<Comment, CommentCreateAttr>{
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
  content: string


  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  userId: number


  @ForeignKey(() => Photo)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  photoId: number


  @BelongsTo(() => User)
  user: User
}

