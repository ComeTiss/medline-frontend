import gql from "graphql-tag";
import { LeadFragment, NeedFragment } from "./fragments";

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
        ...needItem
      }
    }
  }
  ${NeedFragment}
`;
