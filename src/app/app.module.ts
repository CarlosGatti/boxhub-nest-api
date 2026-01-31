import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from '../assets/assets.module';
import { AuthModule } from '../auth/auth.module';
import { CashflowModule } from '../cashflow/cashflow.module';
import { CommentsModule } from '../comments/comments.module';
import { DiscartItemModule } from 'src/discart-item/discart-item.module';
import { DiscartItemUploadController } from '../discart-item/upload/upload.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { HoldingsModule } from '../holdings/holdings.module';
import { MetricsModule } from '../metrics/metrics.module';
import { Module } from '@nestjs/common';
// Wealth Tracker modules
import { PortfoliosModule } from '../portfolios/portfolios.module';
import { PricingModule } from '../pricing/pricing.module';
import { QrcodeModule } from 'src/qrcode/qrcode.module';
import { RatingsModule } from '../ratings/ratings.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { FeedbackModule } from 'src/apps/feedback/feedback.module';
import { SignalboardModule } from 'src/apps/signalboard/signalboard.module';
import { TjModule } from '../tj/tj.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      cors: {
        // SEGURANÇA: Por padrão CORS desabilitado. Só habilita se NÃO for produção
        // Em produção (NODE_ENV=production): NGINX cuida do CORS
        // Em desenvolvimento: habilita CORS localmente
        origin: process.env.NODE_ENV === 'production' ? false : true,
        credentials: process.env.NODE_ENV === 'production' ? false : true,
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
    // Wealth Tracker modules
    PortfoliosModule,
    AssetsModule,
    HoldingsModule,
    PricingModule,
    MetricsModule,
    // Cash Flow module
    CashflowModule,
    // TJ Discount Barcode module
    TjModule,
    // SignalBoard module
    SignalboardModule,
    // Feedback module
    FeedbackModule,
  ],
  controllers: [
    AppController,
    DiscartItemUploadController,
  ],
  providers: [AppService],
})
export class AppModule {}
