import React from 'react';
import '../styles/RepoCard.css';


export default function RepoCard({ repo }) {
    return (
        <div className="repo-card">
            <div className="repo-top">
                <a className="repo-name" href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                <div className="stars">★ {repo.stargazers_count}</div>
            </div>
            {repo.description && <p className="repo-desc">{repo.description}</p>}
            <div className="repo-meta">
                {repo.language && <span>{repo.language}</span>}
                <span>Forks: {repo.forks_count}</span>
                <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
        </div>
    );
}