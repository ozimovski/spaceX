import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
  query GET_SHIPS($limit: Int!, $offset: Int!, $type: String!) {
    ships(find: { type: $type }, limit: $limit, offset: $offset) {
      id
      name
      image
      type
      year_built
      weight_kg
      active
      url
      home_port
    }
  }
`;
