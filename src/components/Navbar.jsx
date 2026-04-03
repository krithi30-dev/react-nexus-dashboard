// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ title, subtitle, onMenuToggle }) {
  return (
    <nav className="navbar">
      <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button className="mobile-menu-btn" onClick={onMenuToggle} aria-label="Toggle menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="2" y1="4.5" x2="16" y2="4.5"/>
            <line x1="2" y1="9" x2="16" y2="9"/>
            <line x1="2" y1="13.5" x2="16" y2="13.5"/>
          </svg>
        </button>
        <div>
          <div className="navbar-title">{title}</div>
          {subtitle && <div className="navbar-subtitle">{subtitle}</div>}
        </div>
      </div>

      <div className="navbar-right">
        {/* Search */}
        <div className="navbar-search">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="6" cy="6" r="4"/>
            <line x1="9.5" y1="9.5" x2="13" y2="13"/>
          </svg>
          <span>Search…</span>
          <span style={{ marginLeft: 8, fontSize: 10, fontFamily: 'JetBrains Mono', background: '#f1f5f9', padding: '1px 5px', borderRadius: 4, color: '#94a3b8' }}>⌘K</span>
        </div>

        {/* Notifications */}
        <div className="navbar-icon-btn" title="Notifications">
          <div className="notif-dot"/>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 1a5 5 0 0 1 5 5v2l1.5 3H1.5L3 8V6a5 5 0 0 1 5-5z"/>
            <path d="M6.5 13a1.5 1.5 0 003 0"/>
          </svg>
        </div>

        {/* Dark mode placeholder */}
        <div className="navbar-icon-btn" title="Toggle theme">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="8" cy="8" r="3"/>
            <line x1="8" y1="1" x2="8" y2="3"/>
            <line x1="8" y1="13" x2="8" y2="15"/>
            <line x1="1" y1="8" x2="3" y2="8"/>
            <line x1="13" y1="8" x2="15" y2="8"/>
            <line x1="3" y1="3" x2="4.5" y2="4.5"/>
            <line x1="11.5" y1="11.5" x2="13" y2="13"/>
            <line x1="13" y1="3" x2="11.5" y2="4.5"/>
            <line x1="4.5" y1="11.5" x2="3" y2="13"/>
          </svg>
        </div>

        {/* Avatar */}
        <div className="navbar-avatar" title="Alex Kim — Super Admin">AK</div>
      </div>
    </nav>
  );
}
