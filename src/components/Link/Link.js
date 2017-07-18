import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GC_USER_ID } from '../../constants';
import { timeDifferenceForDate } from '../../utils';

class Link extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem(GC_USER_ID)
    }
    this.voteForLink = this.voteForLink.bind(this);
  }

  render() {
    const { userId } = this.state;
    const { description, url, votes, postedBy, createdAt } = this.props;
    const voteCount = votes ? votes.length : 0;
    const name = postedBy ? postedBy.name : 'Unknown';
    return (
      <div className="flex mt2 items-center">
        <div className="flex">
          {userId &&
            <div className="ml1 gray f11" onClick={this.voteForLink}>▲</div>
          }
        </div>
        <div className="ml1">
          <a href={url}>{description}</a>
          <div className="f6 lh-copy gray">
            {voteCount} votes | by {name} {timeDifferenceForDate(createdAt)}
          </div>
        </div>
      </div>
    )
  }

  async voteForLink() {
    const { userId } = this.state;
    const { id, votes, createVoteMutation } = this.props;
    const canVote = !votes.map(vote => vote.user.id).includes(userId);
    if (canVote) {
      await createVoteMutation({
        variables: {
          linkId: id,
          userId
        }
      });
    }
    return;
  }

}

Link.propTypes = {
  createVoteMutation: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
