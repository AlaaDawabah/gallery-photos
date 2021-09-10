<template lang="html">
  <div v-if="photos.length">
    <div v-for="photo in photos" :key="photo.id">
        <img :src={{photo.url}}/>
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
<style lang="css"></style>
