import React, { useState } from "react";
import { SearchInput, SearchDiv } from "./styles";
import { useDispatch } from "react-redux";
import { searchFeedbacks } from "../../../features/feedbackSlice";
import { useHistory } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchFeedbacks(search));
      history.push(`/feedback/search?searchQuery=${search}`);
      setSearch("");
    } else {
      history.push("/");
    }
  };
  return (
    <SearchDiv onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Search Title Here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchDiv>
  );
}

export default Search;
