const AcumulatePoints = (data = []) => {
  const acumulate = data.reduce((sum, a) => {
    if (!a.is_redemption) {
      return sum + a.points;
    } else {
      return sum - a.points;
    }
  }, 0);
  let format = Intl.NumberFormat("en-US", {
    useGrouping: true,
  });
  return `${format.format(acumulate)}.00`;
};
export default AcumulatePoints;
