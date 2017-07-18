import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants';

function logout(history) {
  return () => {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    history.push('/');
  };
}

function Header({ userId, history }) {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">new</Link>
        {userId &&
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">submit</Link>
          </div>
        }
        <div className="flex flex-fixed">
          {userId ? (
            <button className="ml1 button pointer black" onClick={logout(history)}>logout</button>
          ) : (
            <Link to="/login" className="ml1 no-underline black">login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  userId: PropTypes.string
};

export default Header;
