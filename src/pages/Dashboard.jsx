import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import { Container } from "@material-ui/core";
import { Tabs, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  getAllRepos,
  getUserDetails,
  getFollowerDetails,
  getFollowingDetails,
} from "../api/api";
import Repos from "../components/Repos";
import Followers from "../components/Followers";
import Following from "../components/Following";

function Dashboard({ data }) {
  const [key, setKey] = useState("repos");
  let { user } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);
    try {
      let res1 = await getUserDetails(user);
      let res2 = await getAllRepos(user);
      let res3 = await getFollowerDetails(user);
      let res4 = await getFollowingDetails(user);

      setUserData(res1.data);
      setRepos(res2.data);
      setFollowers(res3.data);
      setFollowing(res4.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  }, []);

  if (loading) {
    return <div className="dashboard__page cntr">Loading please wait</div>;
  }

  if (error) {
    return (
      <div className="dashboard__page cntr">
        Something went wrong please refresh or try with correct username
      </div>
    );
  }
  return (
    <div className="dashboard__page">
      <AppBar />
      <Container>
        <div className="main__container">
          <div className="left__pane">
            <div className="profile__container">
              <div className="profile__image__container">
                <img src={userData?.avatar_url} />
              </div>
              <div className="profile__user__details">
                <div className="name">{userData?.name}</div>
                <div className="username">{userData?.login}</div>
                <div className="location">{userData?.location}</div>
                <div className="bio">{userData?.bio}</div>
              </div>
              <hr />

              <div className="profile__stats">
                <div className="profile__repos">
                  <div>
                    Repos
                    <p>{userData?.public_repos}</p>
                  </div>
                </div>
                <div className="profile__repos">
                  <div>
                    Followers
                    <p>{userData?.followers}</p>
                  </div>
                </div>
                <div className="profile__repos">
                  <div>
                    Following
                    <p>{userData?.following}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right__pane">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="repos" title="Repositories">
                <Repos repos={repos} />
              </Tab>
              <Tab eventKey="followers" title="Followers">
                <Followers followers={followers} />
              </Tab>
              <Tab eventKey="following" title="Following">
                <Following following={following} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
