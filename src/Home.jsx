import React from "react";
import { Link } from "@reach/router";
import Avatar from './ui/Avatar';

const Home = () => (
  <div>
    <Link to="/login">Login</Link>
    <Avatar border="6px solid white" />
  </div>
);

export default Home;
