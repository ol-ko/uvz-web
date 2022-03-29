<template>
  <main>
    <section v-if="posts">
      <h1>Blog</h1>
      <ul>
        <li v-for="(post) in posts">
          <nuxt-link
            :to="`blog/${post.slug}`"
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
      posts = await $content(app.i18n.locale, 'blog').fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>
