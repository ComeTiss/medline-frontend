import gql from "graphql-tag";
import {
  LeadFragment,
  NeedFragment,
  UserFragment,
  OrganizationFragment
} from "./fragments";

export const GET_LEADS = gql`
  query GetAllLeads($request: GetAllLeadsRequest) {
    getAllLeads(request: $request) {
      leads {
        ...LeadItem
      }
    }
  }
  ${LeadFragment}
`;

export const GET_NEEDS = gql`
  query GetAllNeeds($request: GetAllNeedsRequest) {
    getAllNeeds(request: $request) {
      needs {
        ...NeedItem
      }
    }
  }
  ${NeedFragment}
`;


export const GET_USERS = gql`
  query GetUsersWithOptions($request: GetUsersRequest) {
    getUsersWithOptions(request: $request) {
      users {
        ...UserItem
        organization {
          ...OrganizationItem
        }
      }
    }
  }
  ${UserFragment}
  ${OrganizationFragment}
`;

export const GET_N_NEEDS = gql`
  query GetAllNeeds($request: GetAllNeedsRequest) {
    getAllNeeds(request: $request) {
      needs {
        authorId
        itemName
        specifications
        quantity
        budget
        urgencyLevel
      }
    }
  }
  ${NeedFragment}
`;