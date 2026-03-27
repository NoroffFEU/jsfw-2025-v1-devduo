export const getQueryParameter = (param: string): string | null => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  return params.get(param);
};
