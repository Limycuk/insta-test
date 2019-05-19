/* global Math */

export default (values) => {
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const gap = Math.round(((maxValue - minValue) / 100) * 5);

  return {
    suggestedMin: minValue - gap,
    suggestedMax: maxValue + gap,
  };
};
