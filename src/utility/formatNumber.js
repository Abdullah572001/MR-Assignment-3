const formatNumber = (num) => {
  if (num >= 10000000) {
    const cr = (num / 10000000).toFixed(0) + "Cr";
    return cr;
  } else if (num >= 1000000) {
    const m = (num / 1000000).toFixed(0) + "M";
    return m;
  } else if (num >= 100000) {
    const lakh = (num / 100000).toFixed(0) + "Lakh";
    return lakh;
  } else if (num > 1000) {
    const k = (num / 1000).toFixed(0) + "K";
    return k;
  }
};

export { formatNumber };
