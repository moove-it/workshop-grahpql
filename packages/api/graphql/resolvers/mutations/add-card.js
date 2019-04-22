import { Card } from '../../../models';

const addCard = (_, args, ctx) => {
  try {
    return Card.create(args);
  } catch (err) {
    throw new Error(err);
  }
};

export default addCard;
