<template>
  <div>
    <Header />
    <main class="container">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss" module>

@import "assets/css/variables.scss";

body {
  font-family: Lora, serif;
  margin: 0;
  font-size: 16px;
  background: $grey;
  color: $blackish;
}
</style>