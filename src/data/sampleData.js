// src/data/sampleData.js

export const statsData = [
  {
    id: 'users',
    label: 'Total Users',
    value: '24,891',
    sub: '+1,204 this month',
    trend: '+12.4%',
    trendDir: 'up',
    color: 'blue',
    icon: 'Users',
  },
  {
    id: 'revenue',
    label: 'Revenue',
    value: '$84,230',
    sub: 'vs $74,100 last month',
    trend: '+13.7%',
    trendDir: 'up',
    color: 'green',
    icon: 'DollarSign',
  },
  {
    id: 'orders',
    label: 'Total Orders',
    value: '3,402',
    sub: '-38 from last week',
    trend: '-2.3%',
    trendDir: 'down',
    color: 'amber',
    icon: 'ShoppingCart',
  },
  {
    id: 'growth',
    label: 'Growth Rate',
    value: '8.6%',
    sub: 'Quarterly average',
    trend: '+0.9%',
    trendDir: 'up',
    color: 'violet',
    icon: 'TrendingUp',
  },
];

export const tableData = [
  { id: 1, name: 'Sophia Carter',    initials: 'SC', avatarColor: '#3b82f6', email: 'sophia@nexus.io',   role: 'Admin',   status: 'active',    date: '2025-04-01', amount: '$2,400' },
  { id: 2, name: 'Marcus Liu',       initials: 'ML', avatarColor: '#8b5cf6', email: 'marcus@nexus.io',   role: 'Editor',  status: 'active',    date: '2025-03-29', amount: '$1,820' },
  { id: 3, name: 'Ava Brennan',      initials: 'AB', avatarColor: '#22c55e', email: 'ava@nexus.io',      role: 'Viewer',  status: 'pending',   date: '2025-03-28', amount: '$590'   },
  { id: 4, name: 'James Okafor',     initials: 'JO', avatarColor: '#f59e0b', email: 'james@nexus.io',    role: 'Editor',  status: 'active',    date: '2025-03-25', amount: '$3,100' },
  { id: 5, name: 'Priya Nair',       initials: 'PN', avatarColor: '#ec4899', email: 'priya@nexus.io',    role: 'Admin',   status: 'inactive',  date: '2025-03-22', amount: '$740'   },
  { id: 6, name: 'Ethan Rhodes',     initials: 'ER', avatarColor: '#14b8a6', email: 'ethan@nexus.io',    role: 'Viewer',  status: 'active',    date: '2025-03-20', amount: '$1,290' },
  { id: 7, name: 'Luna Espinoza',    initials: 'LE', avatarColor: '#6366f1', email: 'luna@nexus.io',     role: 'Editor',  status: 'cancelled', date: '2025-03-18', amount: '$0'     },
  { id: 8, name: 'Kai Nakamura',     initials: 'KN', avatarColor: '#ef4444', email: 'kai@nexus.io',      role: 'Viewer',  status: 'pending',   date: '2025-03-15', amount: '$420'   },
];

export const activityData = [
  { id: 1, color: '#22c55e', text: '<strong>Sophia Carter</strong> completed onboarding',        time: '2 min ago'  },
  { id: 2, color: '#3b82f6', text: '<strong>New order #3402</strong> from Marcus Liu',           time: '14 min ago' },
  { id: 3, color: '#f59e0b', text: '<strong>James Okafor</strong> updated billing details',      time: '1 hr ago'   },
  { id: 4, color: '#ef4444', text: '<strong>Luna Espinoza</strong> cancelled subscription',      time: '3 hr ago'   },
  { id: 5, color: '#8b5cf6', text: '<strong>System</strong> generated monthly revenue report',   time: 'Yesterday'  },
];

export const quickStats = [
  { label: 'Avg. Session', value: '4m 32s', pct: '+8%',  dir: 'up'   },
  { label: 'Bounce Rate',  value: '24.1%',  pct: '-3%',  dir: 'up'   },
  { label: 'Conversion',   value: '3.68%',  pct: '+0.9%',dir: 'up'   },
];

export const miniBarData = [6, 9, 5, 12, 8, 14, 10, 16, 13, 20, 17, 24];
