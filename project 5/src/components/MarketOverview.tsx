import React from 'react';
import { marketStats } from '../data/mockCryptoData';
import { formatNumber } from '../utils/formatters';
import { Wallet, TrendingUp, BarChart3, Coins } from 'lucide-react';

export function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Wallet className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Market Cap</h3>
            <p className="font-semibold">{formatNumber(marketStats.totalMarketCap)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">24h Volume</h3>
            <p className="font-semibold">{formatNumber(marketStats.total24hVolume)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <BarChart3 className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">BTC Dominance</h3>
            <p className="font-semibold">{marketStats.btcDominance.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Coins className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Cryptocurrencies</h3>
            <p className="font-semibold">{marketStats.totalCryptos.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}