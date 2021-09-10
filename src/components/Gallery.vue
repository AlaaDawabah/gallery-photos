<template>
  <div v-if="photos.length" class="gallery-container">
    <div v-for="photo in photos" :key="photo.id" class="photo-item">
      <img :src="photo.url" :alt="photo.id" />
      <p>{{ photo.title }}</p>
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>
<script>
export default {
  name: "Gallery",
  computed: {
    photos() {
      return this.$store.getters.photos;
    },
  },
  mounted() {
    this.$store.dispatch("getPhotos");
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
