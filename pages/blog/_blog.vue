<template>
  <section v-if="post">
    <nav aria-label="go back">
      <router-back>< {{ $t('mainMenu.blog.title') }}</router-back>
    </nav>

    <article>
      <h5 :class="$style.createdAt">{{ createdAt }}</h5>
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src='post.image' alt=''>
      <nuxt-content :document="post" />
    </article>
  </section>
</template>

<script>
import { formatDate } from '@/helpers/format.js'

export default {
  async asyncData({ $content, params, error, app }) {
    let post;

    try {
      post = await $content('blog', app.i18n.locale, params.blog).fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { post };
  },
  computed: {
    createdAt() {
      return formatDate(this.post.createdAt || '', this.$i18n.locale);
    }
  }
}
</script>

<style lang="scss" module>
.createdAt + * {
  margin-top: 0;
}
</style>
