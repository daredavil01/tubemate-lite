import React, { useState } from "react";
const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onHandleSubmit}>
        <div className="field">
          <label htmlFor="VideoSearch">Search Videos</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
