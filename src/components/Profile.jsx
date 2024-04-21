import { useState, useEffect } from 'react';
import axios from 'axios';


function GitHubProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/julie-alt', {
      headers: {
        Authorization: "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",
      }
    });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
    }
  };

  return (
    <div className='profile'>
      <h1>GitHub Profile</h1>
      {profile && (
        <div>
          <img src={profile.avatar_url} alt="Avatar" />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
          <p>Public Repositories: {profile.public_repos}</p>
          <p>Location: {profile.location}</p>
          <a href={profile.html_url}>View on Github</a>
        </div>
      )}
    </div>
  );
}

export default GitHubProfile;
