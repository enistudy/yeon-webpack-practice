import { Link } from "react-router-dom";
import Layout from "./Layout";
import React from "react";
import FriendsIcon from "./FriendsIcon";
const Home = () => {
  Object.assign({}, {}, [1]);
  return (
    <Layout>
      <p>React main form</p>
      <FriendsIcon />
      <p>
        <Link to="/page2">page2 로 이동</Link>
      </p>
    </Layout>
  );
};

export default Home;
