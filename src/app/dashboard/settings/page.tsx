'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Mail, Lock, Globe, Moon, Sun } from 'lucide-react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <Label className="text-white">Email Notifications</Label>
                  <p className="text-sm text-gray-400">Receive email updates about your account</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-[#C4A484]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <Label className="text-white">Marketing Emails</Label>
                  <p className="text-sm text-gray-400">Receive updates about new products and offers</p>
                </div>
              </div>
              <Switch
                checked={marketingEmails}
                onCheckedChange={setMarketingEmails}
                className="data-[state=checked]:bg-[#C4A484]"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <div>
                  <Label className="text-white">Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                </div>
              </div>
              <Button variant="outline" className="border-[#3A3A3A] text-white hover:bg-[#3A3A3A]">
                Enable
              </Button>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <Label className="text-white">Dark Mode</Label>
                  <p className="text-sm text-gray-400">Toggle between light and dark theme</p>
                </div>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-[#C4A484]"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div>
                  <Label className="text-white">Profile Visibility</Label>
                  <p className="text-sm text-gray-400">Control who can see your profile information</p>
                </div>
              </div>
              <Button variant="outline" className="border-[#3A3A3A] text-white hover:bg-[#3A3A3A]">
                Private
              </Button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-[#2A2A2A] rounded-lg border border-red-500/20 p-6">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Delete Account</Label>
                <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 