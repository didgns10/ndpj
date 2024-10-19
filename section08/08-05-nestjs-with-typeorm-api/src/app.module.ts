import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';

@Module({
  imports: [
    BoardsModule, //
    // ProductsModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // Generic : {} 안에 객체의 타입을 지정해주는것이다. - 함수의 들어가는 타입
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'myproject',
      entities: [Board],
      synchronize: true, //테이블 동기화 기존에 있으면 덮어쓰지 않게 조심
      logging: true, // 변한거 보기
    }),
  ],
})
export class AppModule {}
