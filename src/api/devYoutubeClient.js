import axios from "axios";

export default class DevYoutubeClient {
  async search() {
    return axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/channels.json");
  }
}
