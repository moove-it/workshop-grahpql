import * as React from 'react';
import { Query } from "react-apollo";

import { GET_CARDS } from '../../graphql/queries';

import Card from '../Card';

import Container from './Container';

const GetCards = () => (
  <Container>
    <Query query={GET_CARDS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";

        if (error) return `Error! ${error.message}`;

        if (!data) return null;

        return data.cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            owner={card.owner}
            kind={card.kind}
          />
        ));
      }}
    </Query>
  </Container>
);

export default GetCards;
