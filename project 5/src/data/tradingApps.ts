import { TradingApp } from '../types/trading-apps';

export const tradingApps: TradingApp[] = [
  {
    id: 'robinhood',
    name: 'Robinhood',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=64&h=64',
    description: 'Commission-free trading app with a focus on accessibility and user experience.',
    rating: 4.2,
    totalReviews: 2500000,
    minDeposit: 1,
    supportedCountries: ['United States'],
    features: ['Commission-free trades', 'Fractional shares', 'Instant deposits', 'Crypto wallet'],
    platforms: ['iOS', 'Android'],
    userRating: {
      upvotes: 15234,
      downvotes: 4321
    }
  },
  {
    id: 'webull',
    name: 'Webull',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=64&h=64',
    description: 'Advanced trading platform with comprehensive analysis tools.',
    rating: 4.5,
    totalReviews: 1200000,
    minDeposit: 0,
    supportedCountries: ['United States', 'Hong Kong', 'Singapore'],
    features: ['24/7 trading', 'Advanced charts', 'Paper trading', 'Options trading'],
    platforms: ['iOS', 'Android'],
    userRating: {
      upvotes: 12567,
      downvotes: 3456
    }
  },
  {
    id: 'binance',
    name: 'Binance',
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=64&h=64',
    description: 'Global crypto exchange with extensive coin support and low fees.',
    rating: 4.7,
    totalReviews: 3500000,
    minDeposit: 10,
    supportedCountries: ['Global (except US)'],
    features: ['Lowest fees', 'Most cryptocurrencies', 'Margin trading', 'Futures trading'],
    platforms: ['iOS', 'Android'],
    userRating: {
      upvotes: 25678,
      downvotes: 5432
    }
  }
];