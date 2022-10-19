/** return a hex color according to vote average */
function formatRating(rating: number) {
  return rating > 7 ? '#10b981' : rating > 5 ? '#f59e0b' : '#ef4444';
}

export default formatRating;
