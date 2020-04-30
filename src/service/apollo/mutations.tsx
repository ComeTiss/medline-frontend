import gql from "graphql-tag";
import {
  LeadFragment,
  NeedFragment,
  UserFragment,
  OrganizationFragment
} from "./fragments";

export const MUTATE_LEAD = gql`
  mutation MutateLead($request: MutateLeadRequest!) {
    mutateLead(request: $request) {
      ...LeadItem
    }
  }
  ${LeadFragment}
`;

export const MUTATE_NEED = gql`
  mutation MutateNeed($request: MutateNeedRequest!) {
    mutateNeed(request: $request) {
      ...NeedItem
    }
  }
  ${NeedFragment}
`;

export const MUTATE_USER = gql`
  mutation UpdateUser($request: MutateNeedRequest!) {
    updateUser(request: $request) {
      ...UserItem
    }
  }
  ${UserFragment}
`;

export const MUTATE_ORGANIZATION = gql`
  mutation MutateOrganization($request: MutateOrganizationRequest!) {
    mutateOrganization(request: $request) {
      ...OrganizationItem
    }
  }
  ${OrganizationFragment}
`;

export const DELETE_NEEDS = gql`
  mutation DeleteNeedsByIds($request: DeleteNeedsByIdsRequest!) {
    deleteNeedsByIds(request: $request) {
      ...NeedItem
    }
  }
  ${NeedFragment}
`;

export const DELETE_LEADS = gql`
  mutation DeleteLeadsByIds($request: DeleteLeadsByIdsRequest!) {
    deleteLeadsByIds(request: $request) {
      ...LeadItem
    }
  }
  ${LeadFragment}
`;
