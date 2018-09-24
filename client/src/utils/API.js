import axios from "axios";

export default {
  // Gets all locations
  getLocs: function() {
    return axios.get("/api/locations");
  },
  // Gets the loc with the given id
  getLoc: function(id) {
    return axios.get("/api/locations/" + id);
  },
  // Deletes the loc with the given id
  deleteLoc: function(id) {
    return axios.delete("/api/locations/" + id);
  },
  // Saves a loc to the database
  saveLoc: function(locData) {
    return axios.post("/api/locations", locData);
  }
};
