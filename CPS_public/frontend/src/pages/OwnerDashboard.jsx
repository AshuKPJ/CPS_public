// frontend/src/pages/OwnerDashboard.jsx

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import StatCard from '../components/StatCard';
import AreaChart from '../components/charts/AreaChart';
import PieChart from '../components/charts/PieChart';
import BarChart from '../components/charts/BarChart';

const OwnerDashboard = () => {
  const [summary, setSummary] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await api.get('/dashboard/summary');
      const res2 = await api.get('/dashboard/monthly-submissions');
      const res3 = await api.get('/dashboard/weekly-activity');
      const res4 = await api.get('/dashboard/submission-results');
      setSummary(res1.data);
      setMonthlyData(res2.data);
      setWeeklyData(res3.data);
      setPieData(res4.data);
    };
    fetchData();
  }, []);

  if (!summary) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">👑 Owner Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Submissions" value={summary.total_submissions} />
        <StatCard title="Captcha Failures" value={summary.captcha_failures} />
        <StatCard title="No Contact Page" value={summary.no_contact_page} />
        <StatCard title="Success Rate" value={`${summary.success_rate}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">📊 Monthly Submissions</h2>
          <BarChart data={monthlyData} />
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">📈 Weekly Activity</h2>
          <AreaChart data={weeklyData} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">🧩 Submission Breakdown</h2>
        <PieChart data={pieData} />
      </div>
    </div>
  );
};

export default OwnerDashboard;
