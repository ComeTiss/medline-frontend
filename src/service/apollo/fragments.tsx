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

export const OrganizationFragment = gql`
  fragment OrganizationItem on Organization {
    id
    name
    address
    country
    city
    activity
    verifiedAt
    deletedAt
    createdAt
    updatedAt
  }
`;

export const UserFragment = gql`
  fragment UserItem on User {
    id
    firstName
    lastName
    email
    country
    city
    functionTitle
    contactID
    contactType
    isAdmin
    createdAt
    updatedAt
  }
`;
