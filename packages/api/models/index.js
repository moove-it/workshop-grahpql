import mongoose from 'mongoose';

import { DB } from '../constants';
import { CardSchema } from './card';

mongoose.Promise = global.Promise;

const Card = mongoose.model('Card', CardSchema);

const all = () => mongoose.modelNames().map(name => mongoose.model(name));

const ready = () => mongoose.connect(DB.MONGO_URL, {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  config: {
    autoIndex: false,
  },
});

export {
  Card,
  all,
  ready,
};
