import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function RepoDetail() {
  const { repoId } = useParams();
  const [repo, setRepo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/julie-alt/${repoId}`,
          {
            headers: {
              Authorization: `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`,
            },
          }
        );
        setRepo(response.data);
      } catch (error) {
        console.error("Error fetching repository:", error);
        setError("An error occurred while fetching repository details.");
      }
    };

    fetchRepo();
  }, [repoId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!repo) {
    return <div>
      Loading...
      </div>;
  }

  return (
    <div className="repo-box">
      <h1>{repo.name}</h1>
      <p className="repo-info">{repo.description}</p>
      <p className="repo-info">Stars: {repo.stargazers_count}</p>
      <p className="repo-info"> Language: {repo.language === null ? "none" : repo.language}</p>
      <p className="repo-info">Visibility: {repo.visibility}</p>
      <p className="repo-info">Forks: {repo.forks}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {" "}
        <br />
        View on Github
      </a>
    </div>
  );
}

export default RepoDetail;
