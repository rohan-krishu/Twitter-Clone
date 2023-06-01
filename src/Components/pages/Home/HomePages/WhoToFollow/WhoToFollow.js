import React from 'react';
import UserCard from './WhoToFollow/UserCard';

const WhoToFollow = () => {
  const users = [
    {
      id: 1,
      name: 'Arijit Singh',
      username: 'arijitsingh',
      avatar: 'https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg',
    },
    {
      id: 2,
      name: 'Narendra Modi',
      username: 'narendramodi',
      avatar: 'https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg',
    },
    {
      id: 3,
      name: 'Gurmeet Choudhary',
      username: 'guruchoudhary',
      avatar: 'https://static.toiimg.com/photo/msid-77277100/77277100.jpg'
    }
  ];

  return (
    <div className="who-to-follow">
      <h2>Who to Follow</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default WhoToFollow;
