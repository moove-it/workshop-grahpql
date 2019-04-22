import gql from "graphql-tag";

const GET_CARDS = gql`
  query getCards {
    cards {
      id
      title
      subtitle
      description
      owner
      kind
      isActive
    }
  }
`;

export default GET_CARDS
