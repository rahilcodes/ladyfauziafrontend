import { gql } from "@apollo/client";
 
export const INVITE_FRIEND = gql`
  mutation inviteFriend($input: createInviteFriendInput!) {
    createInviteFriend(input: $input) {
      inviteFriend {
        success
        message
      }
    }
  }
`;
