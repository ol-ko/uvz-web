<template>
  <main>
    <section v-if="page">
      <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error, app }) {
    let page;

    try {
      page = await $content('pages', app.i18n.locale, params.page).fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }
    return { page };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
