import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { QrcodeModule } from 'src/qrcode/qrcode.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true,
    }),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST ?? 'localhost',
        port: 6379,
        ...(process.env.REDIS_PASSWORD && {
          password: process.env.REDIS_PASSWORD ?? 'asdf1234',
        }),
      },
    }),
    AuthModule,
    UserModule,
    QrcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
