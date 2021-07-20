import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { compareAsc, format, formatDistance } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { FixedSizeList as List } from "react-window";

const SingleRepo = ({ repo }) => {
  return (
    <div key={repo.name} className="single__repo__card">
      <div className="first__row">
        <a href={repo?.html_url}>
          <span className="repo__name">{repo?.name}</span>
        </a>
      </div>
      <div className="description__row">
        <p>{repo?.description}</p>
      </div>
      <div className="second__row">
        <span className="repo__language">{repo?.language}</span>
        <span className="repo__last__update">
          {repo?.stargazers_count}
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>
          <a href={repo?.forks_url}>
            {" "}
            {repo?.forks_count}
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>{" "}
        </span>
        <span>
          {formatDistance(new Date(repo?.updated_at), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {},
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Repos({ repos }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const getItemSize = () => 5;

  const filterSearch = (r) => r.filter((k) => k.name.includes(search));
  return (
    <div className="all__repos">
      <div className={classes.root} className="search">
        <TextField
          id="outlined-basic"
          style={{
            width: "80%",
          }}
          label="Search repository . . ."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          name="username"
        />
        {/* <input type="search" onChange={(e) => setSearch(e.target.value)} /> */}
      </div>
      <div className="all__repos__container">
        {filterSearch(repos).length == 0 ? (
          <div className="cntr">No repository found</div>
        ) : (
          ""
        )}
        {filterSearch(repos).map((repo, index) => (
          <SingleRepo key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Repos;
