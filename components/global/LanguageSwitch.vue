<template>
  <ul :class="$style.languageSwitch">
    <li v-for="language in languages" :key="language">
      <span v-if="$i18n.locale === language">{{ language }}</span>
      <nuxt-link v-else :to="switchLocalePath(language)">{{ language }}</nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'Header',
  data() {
    return {
      languages: ['en', 'de', 'ua']
    }
  },
  methods: {
    switchLocale(newLocale) {
      this.$i18n.locale  = newLocale;
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/css/variables.scss";

.languageSwitch {
  margin: 0.5rem 0 0 0;
  padding: 0;

  @media (min-width: $viewportLargeMin) {
    position: absolute;
    top: 0;
    right: 1rem;
  }

  li {
    display: inline-block;
    text-transform: uppercase;

    span {
      font-weight: bold;
    }
  }

  li + li {
    margin-left: 0.5rem;
    border-left: 1px solid $yellow;
    padding-left: 0.5rem;
  }
}
</style>