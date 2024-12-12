import React from 'react';
import { Star, Info } from 'lucide-react';
import { formatNumber, formatPrice, formatPercent } from '../../utils/formatters';
import { BuyRating } from './BuyRating';
import type { CryptoAsset } from '../../types/crypto';

interface TableRowProps {
  asset: CryptoAsset;
  onVote: (id: string, type: 'buy' | 'pass') => void;
}

export function TableRow({ asset, onVote }: TableRowProps) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400 cursor-pointer" />
          {asset.rank}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={asset.logo} alt={asset.name} className="w-8 h-8 rounded-full" />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-sm text-gray-500">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-right font-medium">{formatPrice(asset.price)}</td>
      <td className={`px-6 py-4 text-right ${asset.percentChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {formatPercent(asset.percentChange24h)}
      </td>
      <td className={`px-6 py-4 text-right ${asset.percentChange7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {formatPercent(asset.percentChange7d)}
      </td>
      <td className="px-6 py-4 text-right">{formatNumber(asset.marketCap)}</td>
      <td className="px-6 py-4 text-right">{formatNumber(asset.volume24h)}</td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-1">
          {asset.circulatingSupply.toLocaleString()} {asset.symbol}
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </div>
      </td>
      <td className="px-6 py-4">
        <BuyRating
          buyVotes={asset.buyVotes}
          passVotes={asset.passVotes}
          onVote={(type) => onVote(asset.id, type)}
        />
      </td>
    </tr>
  );
}