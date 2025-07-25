// frontend/src/pages/UserDashboard.jsx

import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import api from '../services/api';

const UserDashboard = () => {
  const [stats, setStats] = useState({
    campaignsRunning: 0,
    successRate: '0%',
    monthlySubmissions: 0,
    submissionsLeft: 0,
  });

  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryRes = await api.get('/dashboard/summary');
        const pieRes = await api.get('/dashboard/submission-results');
        const lineRes = await api.get('/dashboard/weekly-activity');

        setStats({
          campaignsRunning: summaryRes.data.campaigns_running,
          successRate: summaryRes.data.success_rate + '%',
          monthlySubmissions: summaryRes.data.submissions_this_month,
          submissionsLeft: summaryRes.data.submissions_left,
        });

        setPieData(pieRes.data);
        setLineData(lineRes.data);
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="view-dashboard" className="tab-content p-6">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard title="Campaigns Running" value={stats.campaignsRunning} color="indigo" icon="PlayIcon" />
        <StatCard title="Success Rate" value={stats.successRate} color="green" icon="CheckIcon" />
        <StatCard title="Submissions (Month)" value={stats.monthlySubmissions} color="blue" icon="MailIcon" />
        <StatCard title="Submissions Left" value={stats.submissionsLeft} color="yellow" icon="ClockIcon" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Status</h3>
          <div className="h-64 flex items-center justify-center">
            <PieChart data={pieData} />
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
          <div className="h-64">
            <LineChart data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
