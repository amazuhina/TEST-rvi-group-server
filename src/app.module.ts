import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { User } from "./user/user.model";
import { Photo } from "./photo/photo.model";
import { Comment } from "./comment/comment.model";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DB,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      models: [
        User,
        Photo,
        Comment
      ],
      autoLoadModels: true
    })
  ],
})
export class AppModule {}
