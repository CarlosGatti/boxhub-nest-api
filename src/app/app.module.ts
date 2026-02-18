import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from '../domains/assets/assets.module';
import { AuthModule } from '../core/auth/auth.module';
import { CashflowModule } from '../domains/cashflow/cashflow.module';
import { CommentsModule } from '../domains/comments/comments.module';
import { DiscartItemModule } from '../domains/discart-item/discart-item.module';
import { DiscartItemUploadController } from '../domains/discart-item/upload/upload.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { HoldingsModule } from '../domains/holdings/holdings.module';
import { MetricsModule } from '../domains/metrics/metrics.module';
import { Module } from '@nestjs/common';
// Wealth Tracker modules
import { PortfoliosModule } from '../domains/portfolios/portfolios.module';
import { PricingModule } from '../domains/pricing/pricing.module';
import { QrcodeModule } from '../domains/qrcode/qrcode.module';
import { RatingsModule } from '../domains/ratings/ratings.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { FeedbackModule } from 'src/apps/feedback/feedback.module';
import { HomeOpsModule } from 'src/apps/homeops/homeops.module';
import { SignalboardModule } from 'src/apps/signalboard/signalboard.module';
import { TjModule } from '../domains/tj/tj.module';
import { UserModule } from '../domains/user/user.module';
import { ReviewCardsModule } from '../domains/review-cards/review-cards.module';
import { BucketModule } from '../modules/bucket/bucket.module';

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
    // HomeOps module
    HomeOpsModule,
    // Review Cards module
    ReviewCardsModule,
    // Bucket List (goals + memories)
    BucketModule,
  ],
  controllers: [
    AppController,
    DiscartItemUploadController,
  ],
  providers: [AppService],
})
export class AppModule {}
