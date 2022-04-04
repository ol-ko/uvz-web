<template>
  <section v-if="post">
    <nav aria-label="go back">
      <router-back>< {{ $t('mainMenu.projects.title') }}</router-back>
    </nav>

    <article>
      <img
          v-if="post.cover"
          :src="post.cover"
      >
      <h1>{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error, app }) {
    let post;
    try {
      post = await $content('projects', app.i18n.locale, params.project).fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { post };
  },
}
</script>
