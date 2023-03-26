import { useContext } from "react";
import { AppContext } from "../App";

export const Home = (props) => {
  const { username } = useContext(AppContext);
  return <h1> THIS IS THE HOME PAGE And User Is: {username}</h1>;
};
