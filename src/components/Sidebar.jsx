// src/components/Sidebar.jsx
import React from 'react';

const icons = {
  dashboard: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <rect x="1" y="1" width="7" height="7" rx="1.5"/>
      <rect x="10" y="1" width="7" height="7" rx="1.5"/>
      <rect x="1" y="10" width="7" height="7" rx="1.5"/>
      <rect x="10" y="10" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <circle cx="7" cy="6" r="3"/>
      <path d="M1 16c0-3.3 2.7-6 6-6h0c3.3 0 6 2.7 6 6"/>
      <circle cx="14" cy="5" r="2.2"/>
      <path d="M17 14.5c0-2.5-1.6-4.5-3.5-4.5"/>
    </svg>
  ),
  orders: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <path d="M3 2h12l1.5 9H1.5L3 2z"/>
      <path d="M6 16a1 1 0 100-2 1 1 0 000 2z"/>
      <path d="M13 16a1 1 0 100-2 1 1 0 000 2z"/>
      <path d="M4.5 6h9"/>
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <path d="M2 14 L5 9 L8 11 L12 5 L16 8"/>
      <rect x="1" y="1" width="16" height="16" rx="2"/>
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
      <circle cx="9" cy="9" r="3"/>
      <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4M3.2 14.8l1.4-1.4M13.4 4.6l1.4-1.4"/>
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 14 14" fill="none" width="18" height="18">
      <rect x="1" y="1" width="5" height="5" rx="1.2" fill="white" opacity=".9"/>
      <rect x="8" y="1" width="5" height="5" rx="1.2" fill="white" opacity=".5"/>
      <rect x="1" y="8" width="5" height="5" rx="1.2" fill="white" opacity=".5"/>
      <rect x="8" y="8" width="5" height="5" rx="1.2" fill="white" opacity=".3"/>
    </svg>
  ),
};

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', badge: null },
  { id: 'users',     label: 'Users',     icon: 'users',     badge: '24k' },
  { id: 'orders',    label: 'Orders',    icon: 'orders',    badge: '3.4k' },
  { id: 'analytics', label: 'Analytics', icon: 'analytics', badge: null },
  { id: 'settings',  label: 'Settings',  icon: 'settings',  badge: null },
];

export default function Sidebar({ active, onNavigate, isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">{icons.logo}</div>
          <div className="sidebar-logo-text">Nex<span>us</span></div>
        </div>

        {/* Main nav */}
        <p className="sidebar-section-label">Main Menu</p>
        <ul className="sidebar-nav">
          {navItems.slice(0, 3).map(item => (
            <li key={item.id}>
              <button
                className={`sidebar-link${active === item.id ? ' active' : ''}`}
                onClick={() => { onNavigate(item.id); onClose(); }}
              >
                {icons[item.icon]}
                {item.label}
                {item.badge && <span className="sidebar-badge">{item.badge}</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Secondary nav */}
        <p className="sidebar-section-label">System</p>
        <ul className="sidebar-nav">
          {navItems.slice(3).map(item => (
            <li key={item.id}>
              <button
                className={`sidebar-link${active === item.id ? ' active' : ''}`}
                onClick={() => { onNavigate(item.id); onClose(); }}
              >
                {icons[item.icon]}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Footer user */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">AK</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">Alex Kim</div>
              <div className="sidebar-user-role">Super Admin</div>
            </div>
          </div>
        </div>
      </aside>
      <div className={`overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
    </>
  );
}
