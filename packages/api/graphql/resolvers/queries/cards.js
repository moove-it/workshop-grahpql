import { Card } from '../../../models';

const cards = (_, args, ctx) => {
  try {
    return Card.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export default cards;
