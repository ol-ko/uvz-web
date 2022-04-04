<template>
  <ul :class="$style.postList">
    <PostListItem v-for="post in posts" :post="post" :displayDates="displayDates" :prefix="prefix"
                  :key="post.title"></PostListItem>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array,
    prefix: String,
    displayDates: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" module>
.postList {
  margin: 0;
  padding: 0;
}
</style>