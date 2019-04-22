import { Schema } from 'mongoose';
import base from './plugins/base';

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
      enum: ['HISTORY', 'ART', 'ECONOMY'],
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
