import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import response from "../response";
import { useStateValue } from "../stateProvider";
import "./SearchPage.css";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term); LIVE API CALL

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
