import * as constants from "./constants";
let dataFetcher = async path => {
  const res = await fetch(`${constants.API_URL}${path}`);
  const js = await res.json();
  return js;
};

export default dataFetcher;
