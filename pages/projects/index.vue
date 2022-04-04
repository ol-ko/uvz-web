<template>
  <section v-if="posts">
    <h1>{{ $t('mainMenu.projects.title') }}</h1>
    <PostList :posts="posts" prefix="projects"></PostList>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, error, app }) {
    let posts;
    try {
      posts = await $content('projects', app.i18n.locale).fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>
