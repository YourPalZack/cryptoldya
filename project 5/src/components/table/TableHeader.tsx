import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { CryptoAsset } from '../../types/crypto';

interface TableHeaderProps {
  sortField: keyof CryptoAsset;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof CryptoAsset) => void;
}

export function TableHeader({ sortField, sortDirection, onSort }: TableHeaderProps) {
  const SortIcon = sortDirection === 'asc' ? ChevronUp : ChevronDown;

  const renderSortableHeader = (field: keyof CryptoAsset, label: string) => (
    <th className="px-6 py-3 text-right cursor-pointer hover:text-gray-900" onClick={() => onSort(field)}>
      <div className="flex items-center justify-end gap-1">
        {label}
        {sortField === field && <SortIcon className="w-4 h-4" />}
      </div>
    </th>
  );

  return (
    <thead>
      <tr className="text-sm text-gray-500 border-b border-gray-200">
        <th className="px-6 py-3 text-left">#</th>
        <th className="px-6 py-3 text-left">Name</th>
        {renderSortableHeader('price', 'Price')}
        {renderSortableHeader('percentChange24h', '24h %')}
        {renderSortableHeader('percentChange7d', '7d %')}
        {renderSortableHeader('marketCap', 'Market Cap')}
        {renderSortableHeader('volume24h', 'Volume (24h)')}
        <th className="px-6 py-3 text-right">Circulating Supply</th>
        <th className="px-6 py-3 text-center">Buy Rating</th>
      </tr>
    </thead>
  );
}