import { useState } from "react";
import axios from "axios";

function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  return (
    <div className="search-page">
      <h1>Search GitHub Users</h1>
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter username"
      />
      <button className="search-btn" onClick={handleSearch}>
        <span className="search-text">search</span>
      </button>
      <ul className="search-list">
        {searchResults.map((user) => (
          <li key={user.id} >
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="search-result" >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearch;
