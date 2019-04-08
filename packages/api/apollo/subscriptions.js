import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';

import { DB } from '../constants';

const pubsub = new RedisPubSub({
  publisher: new Redis(DB.REDIS_URL),
  subscriber: new Redis(DB.REDIS_URL),
});

export { pubsub };
