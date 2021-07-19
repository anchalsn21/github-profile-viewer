import axios from "axios";

const getAllRepos = async (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/repos?per_page=250`
  );
};

const getUserDetails = async (username) => {
  return axios.get(`https://api.github.com/users/${username}?per_page=250`);
};

const getFollowerDetails = async (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/followers?per_page=250`
  );
};

const getFollowingDetails = async (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/following?per_page=250`
  );
};

const getStars = async (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/starred?per_page=250`
  );
};

export {
  getAllRepos,
  getUserDetails,
  getFollowerDetails,
  getStars,
  getFollowingDetails,
};
