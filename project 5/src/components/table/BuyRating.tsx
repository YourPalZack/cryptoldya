import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface BuyRatingProps {
  buyVotes: number;
  passVotes: number;
  onVote: (type: 'buy' | 'pass') => void;
}

export function BuyRating({ buyVotes, passVotes, onVote }: BuyRatingProps) {
  const totalVotes = buyVotes + passVotes;
  const buyPercentage = totalVotes > 0 ? (buyVotes / totalVotes) * 100 : 0;
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onVote('buy')}
          className="p-1.5 rounded-full hover:bg-green-100 text-green-600 transition-colors"
          title="Vote Buy"
        >
          <ThumbsUp className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium">{buyVotes}</span>
      </div>
      
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${buyPercentage}%` }}
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{passVotes}</span>
        <button
          onClick={() => onVote('pass')}
          className="p-1.5 rounded-full hover:bg-red-100 text-red-600 transition-colors"
          title="Vote Pass"
        >
          <ThumbsDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}