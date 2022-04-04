<template>
  <section v-if="page">
    <article>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, error, app }) {
    let page;

    try {
      page = await $content('pages', app.i18n.locale, 'home').fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }
    return { page };
  },
}
</script>
