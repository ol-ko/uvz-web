<template>
  <main>
    <section v-if="posts">
      <h1>Blog</h1>
      <ul>
        <li v-for="(post) in posts">
          <img v-if="post.image" :src='post.image' alt=''>
          <span v-else :class='$style.placeholder'></span>
          <nuxt-link
            :to="`blog/${post.slug}`"
            class="card card--clickable"
          >{{post.title}}</nuxt-link>
          <p>{{post.description}}</p>
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
      posts = await $content('blog', app.i18n.locale).fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>

<style module lang='scss'>
.placeholder {
  background: #1C263B;
}
</style>
