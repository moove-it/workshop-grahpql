import * as React from 'react';
import { Mutation } from "react-apollo";

import { GET_CARDS } from '../../graphql/queries';
import { ADD_CARD } from '../../graphql/mutations';

import fillCard from './fill-card';

import Button from './Button';

const AddCardButton = () => (
  <Mutation
    mutation={ADD_CARD}
    refetchQueries={[{ query: GET_CARDS }]}
  >
    {(addCard) => (
      // Manually firing a query
      <Button
        onClick={() => addCard({ variables: fillCard() })}
      >
        Add card
      </Button>
    )}
  </Mutation>
);

export default AddCardButton;
