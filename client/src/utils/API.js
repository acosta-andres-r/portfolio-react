import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  sendEmail: function(info) {
    return axios.get("/api/email", { params: { i: info } });
  }
};
