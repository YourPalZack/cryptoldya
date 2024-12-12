export const formatNumber = (num: number, decimals = 2): string => {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(decimals)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(decimals)}M`;
  }
  if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(decimals)}K`;
  }
  return `$${num.toFixed(decimals)}`;
};

export const formatPrice = (price: number): string => {
  if (price < 0.01) {
    return `$${price.toFixed(6)}`;
  }
  return `$${price.toFixed(2)}`;
};

export const formatPercent = (percent: number): string => {
  return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
};