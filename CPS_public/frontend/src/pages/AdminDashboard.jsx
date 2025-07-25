// frontend/src/pages/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import StatCard from '../components/StatCard';
import AreaChart from '../components/charts/AreaChart';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';

const AdminDashboard = () => {
  const [summary, setSummary] = useState({});
  const [monthlySubmissions, setMonthlySubmissions] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [weeklyActivity, setWeeklyActivity] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [summaryRes, monthlyRes, pieRes, weeklyRes] = await Promise.all([
          api.get('/dashboard/summary'),
          api.get('/dashboard/monthly-submissions'),
          api.get('/dashboard/submission-results'),
          api.get('/dashboard/weekly-activity'),
        ]);

        setSummary(summaryRes.data);
        setMonthlySubmissions(monthlyRes.data);
        setPieData(pieRes.data);
        setWeeklyActivity(weeklyRes.data);
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Users" value={summary.total_users} icon="users" />
        <StatCard title="Total Campaigns" value={summary.total_campaigns} icon="file-text" />
        <StatCard title="Total Submissions" value={summary.total_submissions} icon="send" />
        <StatCard title="CAPTCHA Failures" value={summary.captcha_failures} icon="shield-off" />
        <StatCard title="Owners" value={summary.total_owners} icon="briefcase" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AreaChart title="Monthly Submissions" data={monthlySubmissions} />
        </div>
        <div>
          <PieChart title="Submission Results" data={pieData} />
        </div>
        <div className="lg:col-span-3">
          <LineChart title="Weekly Activity" data={weeklyActivity} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
