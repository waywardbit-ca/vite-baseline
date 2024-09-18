<script setup lang="ts">
import DarkModeToggleButton from './components/DarkModeToggleButton.vue';
</script>

<template>
  <div class="container-fluid">
    <h1>Title</h1>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" :class="{
                'active': $route.name === 'Home'
              }" :to="{ name: 'Home' }">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :class="{
                'active': $route.name === 'About'
              }" :to="{ name: 'About' }">About</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <DarkModeToggleButton></DarkModeToggleButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <main class="container-fluid">
    <RouterView />
  </main>
</template>

<style scoped></style>