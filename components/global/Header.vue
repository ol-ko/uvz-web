<template>
  <nav aria-label="Main Menu">
    <ul>
      <li>
        <nuxt-link :to="localePath('/pages/home')">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/projects')">Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/pages/get-involved')">Get involved</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/blog')">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/pages/contact')">Contact</nuxt-link>
      </li>
    </ul>
    <LanguageSwitch></LanguageSwitch>
  </nav>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue';
export default {
  name: 'Header',
  components: { LanguageSwitch }
}
</script>
