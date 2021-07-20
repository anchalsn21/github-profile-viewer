import React from "react";

const SingleFollower = ({ follower }) => {
  return (
    <div key={follower.login} className="follower__card">
      <div className="first__row">
        <img src={follower?.avatar_url} />
        <span>{follower?.login}</span>
      </div>
    </div>
  );
};

function Followers({ followers }) {
  return (
    <div className="follower__container">
      {followers.length == 0 ? (
        <div className="cntr">No Follower found</div>
      ) : (
        ""
      )}
      {followers?.map((follower, index) => (
        <SingleFollower key={index} follower={follower} />
      ))}
    </div>
  );
}

export default Followers;
