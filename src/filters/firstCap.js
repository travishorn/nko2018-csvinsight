export default (s) => {
  const first = s.charAt(0).toUpperCase();
  const rest = s.slice(1).toLowerCase();
  return `${first}${rest}`;
};
