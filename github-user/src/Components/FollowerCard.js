import React from 'react';

const FollowerCard = props => {
  const follower = props.follower;
  return (
    <div className="card">
      <img src = {follower.avatar_url} alt="avatar URL" /> 
      <div className="card-Info">
        <h3 className="name"> {follower.login} </h3>
        <p>Type: {follower.type}</p>
        <p>Site Admin: {follower.site_admin}</p>
        <p>URL: {follower.url}</p>
      </div>
    </div>
  );
};

export default FollowerCard;
