import axios from "axios";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    photos: [],
  },
  mutations: {
    photosReceived: (state, payload) => {
      console.log("from received", state);
      return (state.photos = payload);
    },
  },
  actions: {
    getPhotos: (context) => {
      console.log("context", context);
      axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) => {
          console.log("res", res);
          context.commit("photosReceived", res.data.splice(0, 49));
        })
        .catch((err) => console.log("err", err));
    },
  },
  getters: {
    photos: (state) => state.photos,
  },
});
