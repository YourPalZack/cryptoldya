import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { AppCard } from './AppCard';
import { tradingApps as initialApps } from '../../data/tradingApps';
import type { TradingApp } from '../../types/trading-apps';

export function TradingAppsSection() {
  const [apps, setApps] = useState(initialApps);
  const [searchTerm, setSearchTerm] = useState('');

  const handleVote = (id: string, type: 'up' | 'down') => {
    setApps(apps.map(app => {
      if (app.id === id) {
        return {
          ...app,
          userRating: {
            upvotes: type === 'up' ? app.userRating.upvotes + 1 : app.userRating.upvotes,
            downvotes: type === 'down' ? app.userRating.downvotes + 1 : app.userRating.downvotes
          }
        };
      }
      return app;
    }));
  };

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Trading Apps for Penny Cryptocurrencies</h2>
        <p className="text-gray-600">
          Discover the best mobile apps for trading penny cryptocurrencies, rated by our community.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search trading apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="space-y-4">
        {filteredApps.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            onVote={handleVote}
          />
        ))}
      </div>
    </section>
  );
}