export function handleAPIError(e) {
  if (e.response.status === 401) {
    return { type: 'AUTH_ERROR' };
  } else if (e.response.status === 404) {
    console.log('Resource not found');
    return {type: '404'};
  } else {
    console.log(e.response.status, e.response.data?.message);
    return {type: 'OTHER'};
  }
}