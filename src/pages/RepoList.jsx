import { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveGrid from "../assets/Grid";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQuery]);

  const fetchRepos = async () => {
    try {
      let url = `https://api.github.com/user/139226169/repos`;
      const params = {
        page,
        per_page: 2,
      };
      if (searchQuery) {
        url = `https://api.github.com/search/repositories`;
        params.q = `${searchQuery} in:name user:julie-alt`;
      }
      const response = await axios.get(url, {
        params,
        headers: {
          Authorization: "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",
        },
      });
      if (searchQuery) {
        setRepos(response.data.items);
      } else {
        setRepos(response.data);
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1));
  };

 
  return (
    <div>
      <h1 className="profile">Github Repositories</h1>
      <input
      className="search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search repositories..."
      />
      <button className="search-btn" onClick={fetchRepos}>Search</button>
      <br /> <br />
      <ResponsiveGrid repos={repos} /> <br />
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>

        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default RepoList;
