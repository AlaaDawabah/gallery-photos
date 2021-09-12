<template>
  <div v-if="photos.length" class="gallery-container">
    <div v-for="photo in photos" :key="photo.id" class="photo-item">
      <img :src="photo.url" :alt="photo.id" />
      <p>{{ photo.title }}</p>
    </div>
  </div>
  <div v-else>Loading ...</div>
  <!-- <button @click="increaseQnty">add Quantity for buy</button> -->
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Gallery",
  computed: {
    // photos(){
    //   // return (this.$store.getters.photos);
    // },

    // WHY NOT ?

    // photos:()=>{
    //  return (this.$store.getters.photos);
    // },

    ...mapGetters(["photos"]),
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  mounted() {
    // OR USE MAPACTIONS
    // this.$store.dispatch("getPhotos");

    this.getPhotos();
  },
};
</script>
<style scoped>
.gallery-container {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto;
  padding: 10px;
}
.photo-item {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0px 4px 15px -8px #000000;
  font-size: 20px;
  text-align: center;
}
</style>

// // notes: // In most cases you should use a regular function with Vue,
// especially when creating: // methods // computed props // watched props
// Mutations can only run synchronous code. If we want to run something asynchronously, we have to use actions.

// Vuex can't keep track of mutations that are asynchronous since asynchronous code doesn’t run sequentially.