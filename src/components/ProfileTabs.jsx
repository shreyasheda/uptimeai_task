import React from 'react';
import '../styles/ProfileTabs.css';


export default function ProfileTabs({ active, onChange }) {
    return (
        <div className="profile-tabs">
            <button className={active === 'overview' ? 'active' : ''} onClick={() => onChange('overview')}>Overview</button>
            <button className={active === 'repositories' ? 'active' : ''} onClick={() => onChange('repositories')}>Repositories</button>
            <button className={active === 'projects' ? 'active' : ''} onClick={() => onChange('projects')}>Projects</button>
            <button className={active === 'packages' ? 'active' : ''} onClick={() => onChange('packages')}>Packages</button>
        </div>
    );
}