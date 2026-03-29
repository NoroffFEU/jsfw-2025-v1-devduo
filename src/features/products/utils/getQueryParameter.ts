export const getQueryParameter = (param: string, searchString: string): string | null => {
  const params = new URLSearchParams(searchString);
  return params.get(param);
};
