import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from '../Link';

class LinkList extends Component {

  render() {
    const { allLinksQuery } = this.props;
    return (
      <div>
        {allLinksQuery.loading && <div>Loading...</div>}
        {allLinksQuery.error && <div>Error...</div>}
        {allLinksQuery.allLinks &&
          <ol>
            {allLinksQuery.allLinks.map(link => <li key={link.id}><Link {...link} /></li>)}
          </ol>
        }
      </div>
    );
  }

}

LinkList.propTypes = {
  allLinksQuery: PropTypes.object
};

LinkList.defaultProps = {
  allLinksQuery: {}
};

export default LinkList;
