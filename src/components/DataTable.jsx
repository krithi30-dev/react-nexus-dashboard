// src/components/DataTable.jsx
import React, { useState } from 'react';

function StatusBadge({ status }) {
  return (
    <span className={`badge ${status}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function DataTable({ data, loading }) {
  const [sortField, setSortField] = useState('date');
  const [sortDir, setSortDir] = useState('desc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const sorted = [...data].sort((a, b) => {
    let av = a[sortField], bv = b[sortField];
    if (typeof av === 'string') av = av.toLowerCase();
    if (typeof bv === 'string') bv = bv.toLowerCase();
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const SortIcon = ({ field }) => (
    <span style={{ marginLeft: 4, opacity: sortField === field ? 1 : 0.3, fontSize: 10 }}>
      {sortField === field && sortDir === 'asc' ? '↑' : '↓'}
    </span>
  );

  if (loading) {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {['User', 'Email', 'Role', 'Status', 'Amount', 'Date'].map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 6 }).map((_, j) => (
                  <td key={j}><div className="skeleton" style={{ height: 14, width: j === 0 ? 160 : 90, borderRadius: 6 }}/></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              User <SortIcon field="name"/>
            </th>
            <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
              Email <SortIcon field="email"/>
            </th>
            <th onClick={() => handleSort('role')} style={{ cursor: 'pointer' }}>
              Role <SortIcon field="role"/>
            </th>
            <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
              Status <SortIcon field="status"/>
            </th>
            <th onClick={() => handleSort('amount')} style={{ cursor: 'pointer' }}>
              Amount <SortIcon field="amount"/>
            </th>
            <th onClick={() => handleSort('date')} style={{ cursor: 'pointer' }}>
              Date <SortIcon field="date"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(row => (
            <tr key={row.id}>
              <td>
                <div className="td-user">
                  <div className="td-avatar" style={{ background: row.avatarColor }}>
                    {row.initials}
                  </div>
                  <div>
                    <div className="td-name">{row.name}</div>
                    <div className="td-sub">ID #{String(row.id).padStart(4, '0')}</div>
                  </div>
                </div>
              </td>
              <td className="td-email">{row.email}</td>
              <td>
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#64748b',
                  background: '#f8fafc',
                  padding: '3px 8px',
                  borderRadius: 6,
                  border: '1px solid #e4eaf4',
                }}>
                  {row.role}
                </span>
              </td>
              <td><StatusBadge status={row.status}/></td>
              <td style={{ fontWeight: 600 }}>{row.amount}</td>
              <td className="td-date">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
