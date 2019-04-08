const API_URL = process.env.REACT_APP_API_URL;

const WS_URL = process.env.REACT_APP_WS_URL;

const GRAPHQL_PATH = process.env.REACT_APP_GRAPHQL_PATH;

const GRAPHQL_ENDPOINT = `${API_URL}${GRAPHQL_PATH}`;

export {
  API_URL,
  WS_URL,
  GRAPHQL_ENDPOINT,
};
