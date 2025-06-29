import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { ProjectModule } from 'src/project/project.module';
import { QrcodeModule } from 'src/qrcode/qrcode.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { SubcontractorModule } from '../subcontractor/subcontractor.module';
import { UploadController } from '../subcontractor/upload/upload.controller';
import { UploadControllerInterface } from '../project/upload/upload.resolver';
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
    SubcontractorModule,
    ProjectModule, // Importando o módulo de projetos
    // Registrando o controller de upload
  ],
  controllers: [AppController, UploadController, UploadControllerInterface],
  providers: [AppService],
})
export class AppModule {}
