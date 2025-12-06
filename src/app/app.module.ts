import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DiscartItemModule } from 'src/discart-item/discart-item.module';
import { DiscartItemUploadController } from '../discart-item/upload/upload.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { QrcodeModule } from 'src/qrcode/qrcode.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { UserModule } from '../user/user.module';
import { CommentsModule } from '../comments/comments.module';
import { RatingsModule } from '../ratings/ratings.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      cors: {
        origin: false,
        credentials: false,
      },
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true,
      path: '/graphql',
      persistedQueries: false,
    }),
    RedisModule.forRoot({
     
      config: {
        
        host: process.env.REDIS_HOST ?? 'localhost',
        port: 6379,
        ...(process.env.REDIS_PASSWORD && process.env.REDIS_PASSWORD !== '' && {
          password: process.env.REDIS_PASSWORD,
        }),
      },
    }),
    AuthModule,
    UserModule,
    QrcodeModule,
    DiscartItemModule,
    CommentsModule,
    RatingsModule,
  ],
  controllers: [
    AppController,
    DiscartItemUploadController,
  ],
  providers: [AppService],
})
export class AppModule {}
