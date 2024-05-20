/* eslint-disable no-unused-vars */
import apiRequestUrl from "./apiRequestUrl";

// passing all my url parameters to this function so that it can access its id to make a get request
export const singlePageLoader = async ({ request, params }) => {
  // to get response on singlePage
  const response = await apiRequestUrl("/posts/" + params.id);

  return response.data;
};
