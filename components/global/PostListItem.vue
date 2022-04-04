<template>
  <li :class="$style.postListItem">
    <div :class="$style.postImage">
      <nuxt-link
          v-if="post.image"
          :to="`${prefix}/${post.slug}`">
        <img :src="post.image" alt="">
      </nuxt-link>
    </div>
    <div>
      <div v-if="createdAt">{{ createdAt }}</div>
      <nuxt-link
          :to="`${prefix}/${post.slug}`"
      ><h2>{{post.title}}</h2></nuxt-link>
      <p>{{post.description}}</p>
    </div>
  </li>
</template>

<script>
import {formatDate} from "~/helpers/format";

export default {
  props: {
    post: Object,
    prefix: String,
    displayDates: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    createdAt() {
      return this.displayDates ? formatDate(this.post.createdAt, this.$i18n.locale) : undefined;
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/css/variables.scss";

.postImage {
  @media (min-width: $viewportLargeMin) {
    width: 25%;
    margin-right: 1rem;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 0.5;
    object-fit: cover;
  }
}

.postListItem {
  display: block;

  @media (min-width: $viewportLargeMin) {
    display: flex;
  }

  h2 {
    margin-top: 0;
  }
}

.postListItem + .postListItem {
  border-top: 1px solid $lightgrey;
  padding-top: 2rem;
  margin-top: 2rem;

  @media (min-width: $viewportLargeMin) {
    padding-top: 1rem;
    margin-top: 1rem;
  }
}
</style>