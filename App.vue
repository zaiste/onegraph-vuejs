<template>
  <div id="app">
    <div class="field control">
      <router-link to="/" class="button is-small is-outlined">Home</router-link>
      <router-link to="/about" class="button is-small is-outlined">About</router-link>
      <router-link to="/tweets" class="button is-small is-outlined">Tweets</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
