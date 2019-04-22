import gql from "graphql-tag";

const ADD_CARD = gql`
  mutation addCard(
    $title: String!,
    $subtitle: String!,
    $description: String!,
    $owner: String!,
    $kind: String!,
    $isActive: Boolean!
  ) {
    addCard(
      title: $title,
      subtitle: $subtitle
      description: $description
      owner: $owner
      kind: $kind
      isActive: $isActive
    ) {
      id
    }
  }
`;

export default ADD_CARD;