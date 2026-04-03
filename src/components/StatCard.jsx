// src/components/StatCard.jsx
import React from 'react';

const iconMap = {
  Users: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <circle cx="8" cy="7" r="3.5"/>
      <path d="M1 18c0-3.9 3.1-7 7-7h0c3.9 0 7 3.1 7 7"/>
      <circle cx="16" cy="6" r="2.5"/>
      <path d="M20 17c0-2.9-1.8-5.3-4-5.3"/>
    </svg>
  ),
  DollarSign: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" width="20" height="20">
      <line x1="10" y1="1" x2="10" y2="19"/>
      <path d="M15 5H7.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H5"/>
    </svg>
  ),
  ShoppingCart: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M2 2h2l2.5 10h9L18 5H6"/>
      <circle cx="8.5" cy="17" r="1.5"/>
      <circle cx="15.5" cy="17" r="1.5"/>
    </svg>
  ),
  TrendingUp: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <polyline points="1 14 7 8 11 12 19 4"/>
      <polyline points="13 4 19 4 19 10"/>
    </svg>
  ),
};

function SkeletonCard() {
  return (
    <div className="stat-card" style={{ pointerEvents: 'none' }}>
      <div className="stat-card-top">
        <div className="skeleton" style={{ width: 42, height: 42, borderRadius: 8 }}/>
        <div className="skeleton" style={{ width: 52, height: 22, borderRadius: 20 }}/>
      </div>
      <div className="skeleton" style={{ width: 80, height: 10, marginBottom: 8 }}/>
      <div className="skeleton" style={{ width: 110, height: 28, marginBottom: 8 }}/>
      <div className="skeleton" style={{ width: 130, height: 10 }}/>
    </div>
  );
}

export default function StatCard({ data, loading }) {
  if (loading) return <SkeletonCard />;

  const { label, value, sub, trend, trendDir, color, icon } = data;

  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-card-top">
        <div className={`stat-icon ${color}`}>
          {iconMap[icon]}
        </div>
        <div className={`stat-trend ${trendDir}`}>
          {trendDir === 'up' ? '↑' : '↓'} {trend}
        </div>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}
