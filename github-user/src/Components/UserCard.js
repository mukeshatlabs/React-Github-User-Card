import React from 'react';

const UserCard = props => {
  const user = props.user;
  return (
    <div className="card">
      <img src = {user.avatar_url} alt="avatar URL" /> 
      <div className="card-Info">
        <h3 className="name"> {user.name} </h3>
        <p>{user.login}</p>
        <p>Location: {user.location}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Bio: {user.bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
