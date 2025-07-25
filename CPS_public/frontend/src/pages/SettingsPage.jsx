// frontend/src/pages/SettingsPage.jsx

import React from 'react';
import Tabs from '../components/ui/tabs';
import AccountPage from './AccountPage';
import PasswordResetForm from '../components/PasswordResetForm';

const SettingsPage = () => {
  const tabs = [
    {
      label: 'Account Info',
      content: <AccountPage />,
    },
    {
      label: 'Password Reset',
      content: <PasswordResetForm />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SettingsPage;
