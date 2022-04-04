<template>
  <section v-if="posts">
    <h1>{{ $t('mainMenu.blog.title') }}</h1>
    <PostList :posts="posts" :displayDates="true" prefix="blog"></PostList>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, error, app }) {
    let posts;

    try {
      posts = await $content('blog', app.i18n.locale).fetch();
      posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>

<style module lang='scss'>

</style>
