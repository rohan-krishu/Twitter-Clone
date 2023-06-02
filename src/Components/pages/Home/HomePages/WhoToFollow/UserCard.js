import React, { useState } from 'react';
import "./WhoToFollow.css"

const UserCard = ({ user }) => {
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed(true);
  };

  const handleUnfollow = () => {
    setFollowed(false);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-username">@{user.username}</p>
      </div>
      {followed ? (
        <button className="unfollow-button" onClick={handleUnfollow}>
          Unfollow
        </button>
      ) : (
        <button className="follow-button" onClick={handleFollow}>
          Follow
        </button>
      )}
    </div>
  );
};

export default UserCard;