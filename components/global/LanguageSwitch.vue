<template>
  <ul>
    <li>
      <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="switchLocalePath('ua')">UA</nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'Header',
  methods: {
    switchLocale(newLocale) {
      this.$i18n.locale  = newLocale;
    }
  }
}
</script>
