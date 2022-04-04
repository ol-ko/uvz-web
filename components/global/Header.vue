<template>
  <header>
    <div class="container">
      <a href="/"
         :class="$style.logo"><img src="@/assets/images/ukrainischer-verein-zug.svg" alt="Ukrainischer Verein Zug"></a>
      <nav aria-label="Main Menu">
        <ul :class="$style.mainMenu">
          <li v-for="mainMenuItem in Object.values($i18n.messages[$i18n.locale].mainMenu)" :key="mainMenuItem.link">
            <nuxt-link :to="localePath(mainMenuItem.link)">{{ mainMenuItem.title }}</nuxt-link>
          </li>
        </ul>
        <LanguageSwitch></LanguageSwitch>
      </nav>
    </div>
  </header>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue';
export default {
  name: 'Header',
  components: { LanguageSwitch }
}
</script>

<style lang="scss" module>
@import "assets/css/variables.scss";

header {
  > div {
    display: flex;
  }

  @media (min-width: $viewportLargeMin) {
    text-align: center;

    > div {
      display: block;
    }
  }
}

.logo {
  display: block;
  margin-right: 1rem;

  @media (min-width: $viewportLargeMin) {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  img {
    height: 9.8rem;
  }
}

.mainMenu {
  margin: 0;
  padding: 0;
  display: block;

  li {
    display: block;

    @media (min-width: $viewportLargeMin) {
      display: inline-block;
    }
  }

  li + li {
    margin-top: 0.2rem;

    @media (min-width: $viewportLargeMin) {
      margin-left: 1rem;
    }
  }

  a {
    background: $yellow;
    color: $blackish;
    display: inline-block;
    padding: 0.3rem 1rem;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1rem;

    &:hover, &:active {
      background: $blue;
      color: $white;
    }

    @media (min-width: $viewportLargeMin) {
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding: 0.6rem 1rem;
    }
  }
}
</style>