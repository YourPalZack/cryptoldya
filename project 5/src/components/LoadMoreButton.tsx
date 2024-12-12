import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export function LoadMoreButton({ onClick, loading = false }: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full mt-4 py-3 px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      ) : (
        <>
          <ChevronDown className="w-5 h-5" />
          <span>Load More</span>
        </>
      )}
    </button>
  );
}