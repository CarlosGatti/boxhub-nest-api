import { Injectable } from '@nestjs/common';

import Redis from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  public redis = new Redis();
}
