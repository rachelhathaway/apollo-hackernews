import { graphql, gql } from 'react-apollo';

const CREATE_VOTE_MUTATION = gql`
  mutation CreateVoteMutation($userId: ID!, $linkId: ID!) {
    createVote(userId: $userId, linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

function CreateVoteMutationWrapper(component) {
  return graphql(CREATE_VOTE_MUTATION, { name: 'createVoteMutation' })(component);
}

export {
  CreateVoteMutationWrapper
}
