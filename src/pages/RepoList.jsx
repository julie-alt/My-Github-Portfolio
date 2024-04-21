import { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveGrid from "../assets/Grid";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/julie-alt/repos`,
        {
          params: {
            page,
            per_page: 4,
          },
          headers: {
            Authorization: "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",
          },
        }
      );

      const linkHeader = response.headers.link;
      let totalPages = 1;

      if (linkHeader) {
        const pageRegex = /&page=(\d+)& rel="last"/;
        const match = linkHeader.match(pageRegex);
        if (match) {
          totalPages = parseInt(match[1]);
          console.log("Total pages:", totalPages);
        }
      }
      setRepos(response.data);
      setTotalPages("Total pages:", totalPages);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  return (
    <div>
      <h1 className="profile">Github Repositories</h1>
      <ResponsiveGrid repos={repos} /> <br />
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RepoList;
