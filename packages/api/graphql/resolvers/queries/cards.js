import { Card } from '../../../models';

const cards = () => {
  try {
    return Card.find({});
  } catch (err) {
    throw new Error(err);
  }
};

export default cards;
