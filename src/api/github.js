export async function fetchUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
}


export async function fetchRepos(username) {
    // fetch first 100 repos (public)
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`);
    if (!res.ok) throw new Error('Failed to fetch repos');
    return res.json();
}