export const remainingDaysTillBrc2022 = () => {
  const now = Date.now();
  const trip = new Date('5/5/2024').getTime();
  const diff = trip - now;

  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
