import * as React from 'react';

import Container from './Container';
import Badge from './Badge';
import Dot from './Dot';

const Card = ({
  title,
  subtitle,
  description,
  owner,
  kind,
}) => (
  <Container>
    <Dot kind={kind} />
    <h2>
      { title }
      <Badge kind={kind}>{ kind }</Badge>
    </h2>
    <p>{ subtitle }</p>
    <p>{ description }</p>
    <p>{ owner }</p>

  </Container>
);

export default Card;
