import React from 'react';
import { Search, Settings } from 'lucide-react';
import { MarketOverview } from './components/MarketOverview';
import { CryptoTable } from './components/CryptoTable';
import { TradingAppsSection } from './components/trading-apps/TradingAppsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">CryptoTracker</h1>
            <div className="flex items-center gap-4">
              <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Today's Cryptocurrency Prices</h2>
          <p className="text-gray-600">The global crypto market cap is {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 2 }).format(2345678901234)}. Get the latest crypto prices and market overview.</p>
        </div>

        <MarketOverview />
        
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">Cryptocurrency Prices Under $5</h3>
          <div className="flex gap-4">
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>DeFi</option>
              <option>NFT</option>
              <option>Metaverse</option>
            </select>
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Chains</option>
              <option>Ethereum</option>
              <option>BSC</option>
              <option>Solana</option>
            </select>
          </div>
        </div>

        <CryptoTable />
        
        <TradingAppsSection />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>© 2024 CryptoTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}