import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=bef0a03f";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
