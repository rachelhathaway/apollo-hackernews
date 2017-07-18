import React from 'react';
import Link from './Link';
import { CreateVoteMutationWrapper } from '../../queries/Vote';

function WrappedLink(props) {
  return <Link {...props} />;
}

export default CreateVoteMutationWrapper(WrappedLink);
