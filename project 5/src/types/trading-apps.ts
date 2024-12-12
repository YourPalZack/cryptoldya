export interface TradingApp {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  totalReviews: number;
  minDeposit: number;
  supportedCountries: string[];
  features: string[];
  platforms: Array<'iOS' | 'Android'>;
  userRating: {
    upvotes: number;
    downvotes: number;
  };
}

export interface CountrySupport {
  name: string;
  code: string;
  supported: boolean;
}