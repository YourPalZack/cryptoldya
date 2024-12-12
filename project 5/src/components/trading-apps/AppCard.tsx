import React from 'react';
import { Star, ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react';
import type { TradingApp } from '../../types/trading-apps';

interface AppCardProps {
  app: TradingApp;
  onVote: (id: string, type: 'up' | 'down') => void;
}

export function AppCard({ app, onVote }: AppCardProps) {
  const totalVotes = app.userRating.upvotes + app.userRating.downvotes;
  const approvalRate = totalVotes > 0 
    ? Math.round((app.userRating.upvotes / totalVotes) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-4">
        <img src={app.logo} alt={app.name} className="w-16 h-16 rounded-lg" />
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{app.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{app.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ({app.totalReviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onVote(app.id, 'up')}
                  className="p-1.5 rounded-full hover:bg-green-100 text-green-600"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium">{app.userRating.upvotes}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{app.userRating.downvotes}</span>
                <button
                  onClick={() => onVote(app.id, 'down')}
                  className="p-1.5 rounded-full hover:bg-red-100 text-red-600"
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-2">{app.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {app.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="space-y-1">
              <div className="text-gray-600">
                Min. Deposit: <span className="font-medium">${app.minDeposit}</span>
              </div>
              <div className="text-gray-600">
                Available in: <span className="font-medium">{app.supportedCountries.join(', ')}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {app.platforms.includes('iOS') && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">iOS</span>
              )}
              {app.platforms.includes('Android') && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">Android</span>
              )}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">Community Rating:</div>
              <div className={`px-2 py-1 rounded text-sm font-medium ${
                approvalRate >= 70 ? 'bg-green-100 text-green-700' :
                approvalRate >= 40 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {approvalRate}% Approval
              </div>
            </div>
            
            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}