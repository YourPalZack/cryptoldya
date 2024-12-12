import React, { useState } from 'react';
import { cryptoAssets as initialAssets } from '../data/mockCryptoData';
import { TableHeader } from './table/TableHeader';
import { TableRow } from './table/TableRow';
import { LoadMoreButton } from './LoadMoreButton';
import { usePagination } from '../hooks/usePagination';
import type { CryptoAsset } from '../types/crypto';

export function CryptoTable() {
  const [assets, setAssets] = useState(initialAssets);
  const [sortField, setSortField] = useState<keyof CryptoAsset>('marketCap');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [loading, setLoading] = useState(false);

  const handleSort = (field: keyof CryptoAsset) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const handleVote = (id: string, type: 'buy' | 'pass') => {
    setAssets(assets.map(asset => {
      if (asset.id === id) {
        return {
          ...asset,
          buyVotes: type === 'buy' ? asset.buyVotes + 1 : asset.buyVotes,
          passVotes: type === 'pass' ? asset.passVotes + 1 : asset.passVotes
        };
      }
      return asset;
    }));
  };

  const sortedAssets = [...assets].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    return (a[sortField] < b[sortField] ? -1 : 1) * multiplier;
  });

  const { displayedItems, hasMore, loadMore } = usePagination(sortedAssets);

  const handleLoadMore = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    loadMore();
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <tbody>
            {displayedItems.map((asset) => (
              <TableRow
                key={asset.id}
                asset={asset}
                onVote={handleVote}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {hasMore && (
        <div className="px-6 pb-4">
          <LoadMoreButton onClick={handleLoadMore} loading={loading} />
        </div>
      )}
    </div>
  );
}