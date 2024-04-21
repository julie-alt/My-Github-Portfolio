import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState([]);

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/julie-alt/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  const userElements = user.map((userElement) => {
    return (
      <div key={userElement.id}>
        <h2>{userElement.name}</h2>
        <p>
          Language:{" "}
          {userElement.language === null ? "none" : userElement.language}
        </p>
        <p>Visibility: {userElement.visibility}</p>
      </div>
    );
  });

  return (
    <>
      <section>{userElements}</section>
    </>
  );
}

export default Home;
