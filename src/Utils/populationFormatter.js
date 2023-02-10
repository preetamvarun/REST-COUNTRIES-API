export const formatPopulation = pop => {
  if (pop >= 1000000) {
    return Number.parseFloat((pop / 1000000).toFixed(2)) + 'M';
  } else if (pop >= 1000 && pop < 1000000) {
    return Number.parseFloat((pop / 1000).toFixed(2)) + 'K';
  }
  return pop;
};
