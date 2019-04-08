import { Schema } from 'mongoose';
import base from './plugins/base';

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: 'card',
    timestamps: true,
  },
);

CardSchema.plugin(base);

export { CardSchema };
