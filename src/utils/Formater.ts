export function toQueryParams(queryParams) {
  if (typeof queryParams === 'string') {
    return queryParams;
  }

  const newQuery = {
    ...queryParams,
  };

  Object.keys(newQuery).forEach((key) => {
    if (
      newQuery[key] === undefined ||
      newQuery[key] === null ||
      Number.isNaN(newQuery[key])
    ) {
      delete newQuery[key];
    }
  });

  return `?${new URLSearchParams(newQuery).toString()}`;
}
