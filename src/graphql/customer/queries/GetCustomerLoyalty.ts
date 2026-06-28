import { gql } from "@apollo/client";

export const GET_CUSTOMER_LOYALTY = gql`
  query getCustomerLoyalty {
    readCustomerLoyalty {
      id
      joyPointsBalance
      vipTierName
      totalSpend
      progressPercent
      nextTierThreshold
      benefits
      referralCode
      referralLink
      transactions {
        id
        points
        type
        description
        createdAt
      }
    }
  }
`;
