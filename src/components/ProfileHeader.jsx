import React from 'react';
import '../styles/ProfileHeader.css';


export default function ProfileHeader({ user }) {
    if (!user) return null;
    return (
        <aside className="profile-header">
            <img className="avatar" src={user.avatar_url} alt={user.login} />
            <h2 className="name">{user.name || user.login}</h2>
            <p className="login">@{user.login}</p>
            {user.bio && <p className="bio">{user.bio}</p>}


            <div className="metadata">
                <div><strong>{user.followers}</strong> followers</div>
                <div><strong>{user.following}</strong> following</div>
                <div><strong>{user.public_repos}</strong> repos</div>
            </div>


            <div className="profile-links">
                {user.location && <div className="meta">📍 {user.location}</div>}
                {user.company && <div className="meta">🏢 {user.company}</div>}
                {user.blog && (
                    <a className="meta link" href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">🔗 {user.blog}</a>
                )}
                <a className="meta link" href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer">View on GitHub →</a>
            </div>
        </aside>
    );
}