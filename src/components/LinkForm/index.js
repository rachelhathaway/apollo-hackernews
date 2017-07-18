import React from 'react';
import LinkForm from './LinkForm';
import { CreateLinkMutationWrapper } from '../../queries/Link';

function WrappedLinkForm(props) {
  return <LinkForm {...props} />;
}

export default CreateLinkMutationWrapper(WrappedLinkForm);
