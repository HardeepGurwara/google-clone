import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../stateProvider";
function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    // do soemthing with input
    history.push("/search");

    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            onClick={search}
            variant="outlined"
            className="search__buttonsHidden"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
