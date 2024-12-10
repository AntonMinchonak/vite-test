export default (...a: number[]): number => {
  return a.reduce((acc, el) => acc + el, 0);
};
