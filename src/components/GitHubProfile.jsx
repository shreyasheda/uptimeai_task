import React, { useEffect, useState, useCallback } from 'react';
import { fetchUser, fetchRepos } from '../api/github';
import ProfileHeader from '../components/ProfileHeader';
import ProfileTabs from '../components/ProfileTabs';
import RepoCard from '../components/RepoCard';
import ContributionGraph from '../components/ContributionGraph';
import Loader from '../components/Loader';
import '../App.css';

export default function GitHubProfile() {
    // default username (you can make this dynamic via URL params)
    const [username, setUsername] = useState('shreeramk');
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState('overview');


    useEffect(() => {
        setLoading(true);
        Promise.all([fetchUser(username), fetchRepos(username)])
            .then(([u, r]) => {
                setUser(u);
                setRepos(r);
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    }, [username]);

    const handleTabChange = useCallback((t) => setTab(t), []);

    return (
        <div className="page-shell">
            <div className="container">
                <div className="left-col">
                    {loading ? <Loader /> : <ProfileHeader user={user} />}
                </div>

                <div className="right-col">
                    <ProfileTabs active={tab} onChange={handleTabChange} />
                    <main className="content-area">
                        {loading && <Loader />}

                        <section>
                            <ContributionGraph username={username} />
                        </section>

                        {!loading && tab === 'overview' && (
                            <section>
                                <h3>Popular repositories</h3>
                                <div className="repo-grid">
                                    {repos.slice(0, 6).map(r => <RepoCard key={r.id} repo={r} />)}
                                </div>
                            </section>
                        )}


                        {!loading && tab === 'repositories' && (
                            <section>
                                <h3>Repositories ({repos.length})</h3>
                                <div className="repo-list">
                                    {repos.map(r => <RepoCard key={r.id} repo={r} />)}
                                </div>
                            </section>
                        )}


                        {!loading && (tab === 'projects' || tab === 'packages') && (
                            <section>
                                <h3>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h3>
                                <p>No content for this tab (mocked for the assignment).</p>
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}