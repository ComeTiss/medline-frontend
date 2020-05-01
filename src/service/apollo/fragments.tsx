import gql from "graphql-tag";

export const LeadFragment = gql`
  fragment LeadItem on Lead {
    id
    authorId
    itemName
    specifications
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
    urgencyLevel
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
    country
    city
    address
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
    civility
    email
    displayEmail
    functionTitle
    isAdmin
    createdAt
    updatedAt
    phoneNumber
    whatsapp
    skype
    wechat
    zoom
  }
`;
