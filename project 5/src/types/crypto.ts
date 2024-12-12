export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  percentChange24h: number;
  percentChange7d: number;
  logo: string;
  buyVotes: number;
  passVotes: number;
}

export interface MarketStats {
  totalMarketCap: number;
  total24hVolume: number;
  btcDominance: number;
  totalCryptos: number;
}