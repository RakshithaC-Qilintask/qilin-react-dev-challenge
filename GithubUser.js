import React, { useState, useEffect } from 'react';

const GitHubUser = () => {
  const username = 'RakhsithaC'; // GitHub username
  const repositoryUrl = 'https://api.github.com/users/RakhsithaC/repos'; // Repository URL

  // State variables to store user data, repositories, loading status, and error
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data and repositories from GitHub API
    const fetchUserData = async () => {
      try {
        setLoading(true); // Set loading state to true while fetching data

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        setUser(userData); // Update user state with fetched user data

        // Fetch repositories data
        const reposResponse = await fetch(repositoryUrl);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData); // Update repositories state with fetched repositories data

        setLoading(false); // Set loading state to false after data fetching is completed
      } catch (error) {
        setError(error.message); // Set error state if any error occurs during data fetching
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchUserData(); // Invoke the fetchUserData function when the component mounts
  }, [username, repositoryUrl]); // Depend on username and repositoryUrl to re-fetch data if they change

  // Render loading message while fetching data
  if (loading) return <div>Loading...</div>;

  // Render error message if there's an error
  if (error) return <div>Error: {error}</div>;

  // Return null if user data hasn't been fetched yet
  if (!user) return null;

  // Render user profile picture, username, and list of repositories
  return (
    <div>
      <h2>User: {user.login}</h2>
      <img src={user.avatar_url} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
      <h3>Repositories:</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUser;
