/* eslint-disable no-unused-vars */
import apiRequestUrl from "./apiRequestUrl";

// passing all my url parameters to this function so that it can access its id to make a get request and it loads rhe results on the single Page after fetching data and this loader is being used in app.js in singlePage

export const singlePageLoader = async ({ request, params }) => {
  // to get response on singlePage
  const response = await apiRequestUrl("/posts/" + params.id);

  return response.data;
};

// this loader function access url parameters to perform search on queries of URL and is being utilized in app.js listPage to load results on listPage

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];

  // // to get response on singlePage
  const response = await apiRequestUrl("/posts?" + query);

  return response.data;
};
