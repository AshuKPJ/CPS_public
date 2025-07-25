// frontend/src/pages/CampaignDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const CampaignDetailPage = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await api.get(`/campaigns/${campaignId}`);
        setCampaign(res.data);
      } catch (err) {
        setError('Failed to load campaign data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [campaignId]);

  if (loading) return <div className="text-center py-8">Loading campaign...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!campaign) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Campaign: {campaign.name}</h2>

      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Message:</strong> {campaign.message}</p>
        <p><strong>Proxy Used:</strong> {campaign.proxy}</p>
        <p><strong>Captcha Enabled:</strong> {campaign.captcha_enabled ? 'Yes' : 'No'}</p>
        <p><strong>Status:</strong> {campaign.status}</p>
        <p><strong>Created At:</strong> {new Date(campaign.created_at).toLocaleString()}</p>
        <p><strong>Total Websites:</strong> {campaign.total_websites}</p>
        <p><strong>Submitted:</strong> {campaign.submitted}</p>
        <p><strong>Failed:</strong> {campaign.failed}</p>
        <p><strong>Success Rate:</strong> {((campaign.submitted / campaign.total_websites) * 100).toFixed(1)}%</p>
      </div>

      {campaign.file_url && (
        <div className="mt-4">
          <a
            href={campaign.file_url}
            className="text-indigo-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Uploaded File
          </a>
        </div>
      )}

      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Restart Campaign</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded">Delete Campaign</button>
      </div>
    </div>
  );
};

export default CampaignDetailPage;
