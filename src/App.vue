<script setup>
// import { router-link} from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"> invoice </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <template>
            <router-link to="/dashboard" class="navbar-item"
              >dashboard</router-link
            >
          </template>
        </div>
      </div>
    </nav>
  </div>

  <section>
    <router-view />
  </section>
</template>

<style lang="scss">
// @import "../node_modules/bulma";
// @import "./../node_modules/Bulma/CSS/bulma.css";
</style>
