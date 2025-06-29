export const remainingDaysUntilMendoza = () => {
  const now = Date.now()
  const trip = new Date('7/9/2025').getTime()
  const diff = trip - now

  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
}
