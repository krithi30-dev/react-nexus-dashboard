// src/App.jsx
import React, { useState, useEffect } from 'react';
import './styles/global.css';

import Sidebar     from './components/Sidebar';
import Navbar      from './components/Navbar';
import StatCard    from './components/StatCard';
import DataTable   from './components/DataTable';
import MiniChart   from './components/MiniChart';

import {
  statsData,
  tableData,
  activityData,
  quickStats,
  miniBarData,
} from './data/sampleData';

// ── Page titles ──────────────────────────────────────────────────────────────
const PAGE_META = {
  dashboard: { title: 'Dashboard',  subtitle: 'Welcome back, Alex — here\'s what\'s happening.' },
  users:     { title: 'Users',      subtitle: 'Manage your team and user accounts.' },
  orders:    { title: 'Orders',     subtitle: 'Track and manage recent transactions.' },
  analytics: { title: 'Analytics',  subtitle: 'Visualise trends and performance metrics.' },
  settings:  { title: 'Settings',   subtitle: 'Configure your workspace preferences.' },
};

// ── Placeholder pages ────────────────────────────────────────────────────────
function PlaceholderPage({ title }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 12, color: 'var(--text-muted)' }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".4">
        <rect x="4" y="4" width="40" height="40" rx="8"/>
        <line x1="14" y1="24" x2="34" y2="24"/>
        <line x1="24" y1="14" x2="24" y2="34"/>
      </svg>
      <p style={{ fontSize: 15, fontWeight: 600 }}>{title} page</p>
      <p style={{ fontSize: 13 }}>This section is under construction.</p>
    </div>
  );
}

// ── Dashboard page ───────────────────────────────────────────────────────────
function DashboardPage({ loading }) {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div>
          <div className="page-title">Overview</div>
          <div className="page-subtitle">April 2025 · All data is live-synced</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M7 1v9M4 7l3 3 3-3"/>
              <path d="M1 11v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
            </svg>
            Export
          </button>
          <button className="btn btn-primary">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13"/>
              <line x1="1" y1="7" x2="13" y2="7"/>
            </svg>
            Add Record
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="cards-grid">
        {statsData.map(s => (
          <StatCard key={s.id} data={s} loading={loading}/>
        ))}
      </div>

      {/* Middle row: chart + activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>

        {/* Revenue chart card */}
        <div className="section-card">
          <div className="section-header">
            <div>
              <div className="section-title">Revenue Trend</div>
              <div className="section-subtitle">Last 12 months</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>↑ 13.7% vs last year</span>
              <div className="section-action">View all</div>
            </div>
          </div>
          <div style={{ padding: '20px 24px 16px' }}>
            {loading ? (
              <div className="skeleton" style={{ height: 100, borderRadius: 8 }}/>
            ) : (
              <>
                {/* SVG sparkline */}
                <svg width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none" style={{ display: 'block', marginBottom: 8 }}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 L33 72 L66 64 L100 58 L133 50 L166 44 L200 52 L233 38 L266 30 L300 24 L333 18 L366 14 L400 8 L400 100 L0 100Z"
                    fill="url(#grad)"
                  />
                  <path
                    d="M0 80 L33 72 L66 64 L100 58 L133 50 L166 44 L200 52 L233 38 L266 30 L300 24 L333 18 L366 14 L400 8"
                    fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  {/* Highlight dot */}
                  <circle cx="400" cy="8" r="4" fill="#2563eb"/>
                  <circle cx="400" cy="8" r="7" fill="#2563eb" fillOpacity="0.2"/>
                </svg>
                {/* Month labels */}
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 4 }}>
                  {['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'].map(m => (
                    <span key={m} style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>{m}</span>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Quick stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--border-light)' }}>
            {quickStats.map((q, i) => (
              <div key={i} style={{
                padding: '14px 20px',
                borderRight: i < 2 ? '1px solid var(--border-light)' : 'none',
              }}>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 6 }}>{q.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{q.value}</span>
                  <span className={`qs-pct ${q.dir}`}>{q.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="section-card">
          <div className="section-header">
            <div>
              <div className="section-title">Recent Activity</div>
              <div className="section-subtitle">Live updates</div>
            </div>
            <div className="section-action">All</div>
          </div>
          <div className="activity-list">
            {activityData.map(a => (
              <div key={a.id} className="activity-item">
                <div className="activity-dot" style={{ background: a.color }}/>
                <div className="activity-content">
                  <div
                    className="activity-text"
                    dangerouslySetInnerHTML={{ __html: a.text }}
                  />
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <div className="section-title">Recent Users &amp; Orders</div>
            <div className="section-subtitle">Showing {tableData.length} most recent entries · Click headers to sort</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="section-action">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <line x1="2" y1="4" x2="12" y2="4"/>
                <line x1="4" y1="7" x2="10" y2="7"/>
                <line x1="6" y1="10" x2="8" y2="10"/>
              </svg>
              Filter
            </div>
            <div className="section-action">Export CSV</div>
          </div>
        </div>
        <DataTable data={tableData} loading={loading}/>
        {/* Pagination */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 24px', borderTop: '1px solid var(--border-light)',
        }}>
          <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--text-primary)' }}>1–8</strong> of <strong style={{ color: 'var(--text-primary)' }}>248</strong> entries
          </span>
          <div style={{ display: 'flex', gap: 6 }}>
            {['←', '1', '2', '3', '…', '31', '→'].map((p, i) => (
              <button key={i} style={{
                width: 30, height: 30, borderRadius: 6,
                border: '1px solid var(--border)',
                background: p === '1' ? 'var(--blue)' : 'var(--surface)',
                color: p === '1' ? 'white' : 'var(--text-secondary)',
                fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'Sora, sans-serif',
              }}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activePage,   setActivePage]   = useState('dashboard');
  const [sidebarOpen,  setSidebarOpen]  = useState(false);
  const [loading,      setLoading]      = useState(true);

  // Simulate async data load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const meta = PAGE_META[activePage] || PAGE_META.dashboard;

  return (
    <div className="app">
      <Sidebar
        active={activePage}
        onNavigate={setActivePage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main">
        <Navbar
          title={meta.title}
          subtitle={meta.subtitle}
          onMenuToggle={() => setSidebarOpen(o => !o)}
        />

        <div className="content">
          {activePage === 'dashboard' ? (
            <DashboardPage loading={loading}/>
          ) : (
            <PlaceholderPage title={meta.title}/>
          )}
        </div>
      </div>
    </div>
  );
}
