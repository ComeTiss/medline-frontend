import gql from "graphql-tag";
import { LeadFragment, NeedFragment, UserFragment } from "./fragments";

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
