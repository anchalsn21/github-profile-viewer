import React from "react";

function Following({ following }) {
  return (
    <div className="follower__container">
      {following.length == 0 ? (
        <div className="cntr">No Following List found</div>
      ) : (
        ""
      )}
      {following?.map((follower) => (
        <div key={follower.login} className="follower__card">
          <div className="first__row">
            <img src={follower?.avatar_url} />
            <span>{follower?.login}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Following;
