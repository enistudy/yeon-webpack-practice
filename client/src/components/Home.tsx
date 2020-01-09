import { Link } from "react-router-dom";
import Layout from "./Layout";
import React from "react";
const Home = () => {
  return (
    <Layout>
      <p>React main form</p>
      <p>
        <Link to="/page2">page2 로 이동</Link>
      </p>
    </Layout>
  );
};

export default Home;
