import { gql } from '@apollo/client';

export const GET_SHIP_TYPES = gql`
  query GET_SHIP_TYPES {
    ships {
      type
    }
  }
`;
