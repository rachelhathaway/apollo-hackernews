import { graphql, gql } from 'react-apollo';

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export default function AllLinksQueryWrapper(Component) {
  return graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(Component);
}
