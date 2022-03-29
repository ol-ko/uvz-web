<template>
  <main>
    <section v-if="posts">
      <h1>Projects</h1>
      <ul>
        <li v-for="(post) in posts">
          <nuxt-link
            :to="`projects/${post.slug}`"
            class="card card--clickable"
          >{{post.title}}</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error, app }) {
    let posts;
    try {
      posts = await $content(app.i18n.locale, 'projects').fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>
