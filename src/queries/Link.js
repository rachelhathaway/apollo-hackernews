import { graphql, gql } from 'react-apollo';

export const SUBSCRIBE_QUERY = gql`
  subscription {
    Link(filter: {
      mutation_in: [CREATED]
    }) {
      node {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`;

const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!, $postedById: ID!) {
    createLink(
      description: $description,
      url: $url
      postedById: $postedById
    ) {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
    }
  }
`;

function AllLinksQueryWrapper(component) {
  return graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(component);
}

function CreateLinkMutationWrapper(component) {
  return graphql(CREATE_LINK_MUTATION, { name: 'createLinkMutation' })(component);
}

export {
  AllLinksQueryWrapper,
  CreateLinkMutationWrapper
}
