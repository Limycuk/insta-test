export default (list, type) => {
  const data = list.find((item) => item.value === type);
  return data.label;
};
