<template>
  <div class="picture">
    <img :src="imgSrc" alt="" :mode="imgMode" />
  </div>
</template>

<script>
export default {
  name: "showImage",
  components: {},
  props: {
    imgSrc: {
      default: "",
      typeof: String,
    },
    imgMode: {
      default: "widthFix",
      typeof: String,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style>
.picture,
img {
  width: 100px;
  height: 100px;
}
</style>
