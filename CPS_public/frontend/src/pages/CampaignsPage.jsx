// frontend/src/pages/CampaignsPage.js

import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import { Link, useNavigate } from 'react-router-dom';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCampaignName, setNewCampaignName] = useState('');
  const [newMessageTemplate, setNewMessageTemplate] = useState('');
  const [websiteList, setWebsiteList] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/campaigns/');
      setCampaigns(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch campaigns.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    try {
      const websites = websiteList.split('\n').filter(url => url.trim() !== '');
      if (!newCampaignName || !newMessageTemplate || websites.length === 0) {
        setError("Please fill all fields and provide at least one website.");
        return;
      }

      const response = await apiClient.post('/campaigns/', {
        name: newCampaignName,
        message_template: newMessageTemplate,
        websites: websites,
      });
      
      // Reset form and refresh list
      setShowCreateForm(false);
      setNewCampaignName('');
      setNewMessageTemplate('');
      setWebsiteList('');
      fetchCampaigns();
      // Navigate to the new campaign's detail page
      navigate(`/campaigns/${response.data.id}`);

    } catch (err) {
      setError('Failed to create campaign.');
      console.error(err);
    }
  };

  if (loading) return <div>Loading campaigns...</div>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Campaigns</h1>
        <button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
        >
          {showCreateForm ? 'Cancel' : '+ New Campaign'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {showCreateForm && (
        <form onSubmit={handleCreateCampaign} className="mb-8 p-6 border rounded-md bg-gray-50 space-y-4">
          <h2 className="text-xl font-semibold">Create New Campaign</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
            <input type="text" value={newCampaignName} onChange={e => setNewCampaignName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message Template</label>
            <textarea value={newMessageTemplate} onChange={e => setNewMessageTemplate(e.target.value)} rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Website URLs (one per line)</label>
            <textarea value={websiteList} onChange={e => setWebsiteList(e.target.value)} rows="6" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="https://example.com&#10;https://anothersite.org" required></textarea>
          </div>
          <div className="text-right">
            <button type="submit" className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">Launch Campaign</button>
          </div>
        </form>
      )}
      
      <div className="space-y-4">
        {campaigns.length > 0 ? (
          campaigns.map(campaign => (
            <div key={campaign.id} className="p-4 border rounded-md flex justify-between items-center hover:bg-gray-50 transition-colors">
              <div>
                <h2 className="font-semibold text-lg">{campaign.name}</h2>
                <p className="text-sm text-gray-500">Status: <span className="font-medium text-gray-700">{campaign.status}</span></p>
                <p className="text-sm text-gray-500">Created: {new Date(campaign.created_at).toLocaleString()}</p>
              </div>
              <Link to={`/campaigns/${campaign.id}`} className="text-indigo-600 hover:underline">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>You haven't created any campaigns yet.</p>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;
