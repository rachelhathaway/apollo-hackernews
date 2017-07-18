import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from './Link';
import AllLinksQueryWrapper from '../queries/Link';

class LinkList extends Component {

  render() {
    const { query } = this.props;
    return (
      <div>
        {query.loading && <div>Loading...</div>}
        {query.error && <div>Something went wrong...</div>}
        {query.allLinks &&
          <ul>
            {query.allLinks.map(link => <li key={link.id}><Link link={link} /></li>)}
          </ul>
        }
      </div>
    );
  }

}

LinkList.propTypes = {
  query: PropTypes.object
};

LinkList.defaultProps = {
  query: {}
};

export default AllLinksQueryWrapper(LinkList);
