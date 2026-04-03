// src/components/MiniChart.jsx
import React from 'react';

export default function MiniChart({ data, color = '#2563eb', height = 28 }) {
  const max = Math.max(...data);
  return (
    <div className="mini-bar-row" style={{ height }}>
      {data.map((v, i) => (
        <div
          key={i}
          className="mini-bar"
          style={{
            height: `${(v / max) * 100}%`,
            background: i === data.length - 1 ? color : undefined,
            opacity: i === data.length - 1 ? 1 : 0.4 + (i / data.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
}
