import { CryptoAsset, MarketStats } from '../types/crypto';

export const marketStats: MarketStats = {
  totalMarketCap: 2345678901234,
  total24hVolume: 123456789012,
  btcDominance: 42.5,
  totalCryptos: 789
};

export const cryptoAssets: CryptoAsset[] = [
  {
    id: 'xrp',
    rank: 1,
    name: 'XRP',
    symbol: 'XRP',
    price: 0.62,
    marketCap: 33789012345,
    volume24h: 1234567890,
    circulatingSupply: 54321098765,
    percentChange24h: 2.5,
    percentChange7d: -1.2,
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1234,
    passVotes: 567
  },
  {
    id: 'cardano',
    rank: 2,
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.45,
    marketCap: 15789012345,
    volume24h: 987654321,
    circulatingSupply: 35123456789,
    percentChange24h: -1.8,
    percentChange7d: 3.4,
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=48&h=48',
    buyVotes: 2345,
    passVotes: 789
  },
  {
    id: 'stellar',
    rank: 3,
    name: 'Stellar',
    symbol: 'XLM',
    price: 0.11,
    marketCap: 2789012345,
    volume24h: 234567890,
    circulatingSupply: 25123456789,
    percentChange24h: 1.2,
    percentChange7d: -2.5,
    logo: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=48&h=48',
    buyVotes: 890,
    passVotes: 234
  },
  {
    id: 'polkadot',
    rank: 4,
    name: 'Polkadot',
    symbol: 'DOT',
    price: 4.85,
    marketCap: 5789012345,
    volume24h: 345678901,
    circulatingSupply: 1123456789,
    percentChange24h: -0.8,
    percentChange7d: 1.5,
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1567,
    passVotes: 432
  },
  {
    id: 'chainlink',
    rank: 5,
    name: 'Chainlink',
    symbol: 'LINK',
    price: 4.23,
    marketCap: 4567890123,
    volume24h: 234567890,
    circulatingSupply: 987654321,
    percentChange24h: 3.2,
    percentChange7d: -0.5,
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=48&h=48',
    buyVotes: 2100,
    passVotes: 345
  },
  {
    id: 'cosmos',
    rank: 6,
    name: 'Cosmos',
    symbol: 'ATOM',
    price: 3.95,
    marketCap: 3456789012,
    volume24h: 123456789,
    circulatingSupply: 876543210,
    percentChange24h: -1.5,
    percentChange7d: 2.8,
    logo: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1890,
    passVotes: 567
  },
  {
    id: 'algorand',
    rank: 7,
    name: 'Algorand',
    symbol: 'ALGO',
    price: 0.98,
    marketCap: 2345678901,
    volume24h: 98765432,
    circulatingSupply: 765432109,
    percentChange24h: 1.8,
    percentChange7d: -1.2,
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1234,
    passVotes: 432
  },
  {
    id: 'tezos',
    rank: 8,
    name: 'Tezos',
    symbol: 'XTZ',
    price: 1.45,
    marketCap: 1234567890,
    volume24h: 87654321,
    circulatingSupply: 654321098,
    percentChange24h: -2.1,
    percentChange7d: 1.7,
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=48&h=48',
    buyVotes: 987,
    passVotes: 345
  },
  {
    id: 'theta',
    rank: 9,
    name: 'Theta',
    symbol: 'THETA',
    price: 0.89,
    marketCap: 890123456,
    volume24h: 76543210,
    circulatingSupply: 543210987,
    percentChange24h: 2.4,
    percentChange7d: -0.9,
    logo: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1567,
    passVotes: 678
  },
  {
    id: 'zcash',
    rank: 10,
    name: 'Zcash',
    symbol: 'ZEC',
    price: 4.56,
    marketCap: 789012345,
    volume24h: 65432109,
    circulatingSupply: 432109876,
    percentChange24h: -1.3,
    percentChange7d: 2.1,
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=48&h=48',
    buyVotes: 876,
    passVotes: 234
  },
  // Additional assets for load more functionality
  {
    id: 'neo',
    rank: 11,
    name: 'NEO',
    symbol: 'NEO',
    price: 3.21,
    marketCap: 678901234,
    volume24h: 54321098,
    circulatingSupply: 321098765,
    percentChange24h: 1.9,
    percentChange7d: -1.4,
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=48&h=48',
    buyVotes: 1234,
    passVotes: 456
  },
  {
    id: 'waves',
    rank: 12,
    name: 'Waves',
    symbol: 'WAVES',
    price: 2.34,
    marketCap: 567890123,
    volume24h: 43210987,
    circulatingSupply: 210987654,
    percentChange24h: -2.3,
    percentChange7d: 1.8,
    logo: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=48&h=48',
    buyVotes: 987,
    passVotes: 321
  }
];