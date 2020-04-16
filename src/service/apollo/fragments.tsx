import gql from "graphql-tag";

export const LeadFragment = gql`
  fragment LeadItem on Lead {
    id
    authorId
    itemName
    speficiations
    quantity
    cost
    availableAt
    createdAt
    updatedAt
  }
`;

export const NeedFragment = gql`
  fragment NeedItem on Need {
    id
    authorId
    itemName
    specifications
    quantity
    budget
    expireAt
    createdAt
    updatedAt
  }
`;
