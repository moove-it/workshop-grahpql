import faker from 'faker';

import KIND from '../../constants/kind';

const fillCard = () => ({
  title: faker.lorem.word(),
  subtitle: faker.lorem.words(),
  description: faker.lorem.sentence(),
  owner: faker.name.firstName(),
  kind: KIND[Math.floor(Math.random() * KIND.length)], // Random kind.
  isActive: true,
});

export default fillCard;
