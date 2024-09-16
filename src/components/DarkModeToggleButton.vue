<script setup lang="ts">
import { ref, onMounted } from 'vue';

const darkMode = ref(true);

onMounted(() => {
  if (window.matchMedia) {
    let query = window.matchMedia('(prefers-color-scheme: dark)');
    darkMode.value = query.matches;
    query.addEventListener('change', (event) => {
      darkMode.value = event.matches;
      applyMode();
    });
  };
  applyMode();
});

const toggle = () => {
  darkMode.value = !darkMode.value;
  applyMode();
};

const applyMode = () => {
  let elm = document.getElementsByTagName('html')[0];
  if (!elm) {
    return;
  };
  if (darkMode.value) {
    elm.setAttribute('data-bs-theme', 'dark');
  } else {
    elm.removeAttribute('data-bs-theme');
  };
};
</script>

<template>
  <button class="btn btn-light"><span class="fad" :class="{
    'fa-moon': darkMode === false,
    'fa-sun': darkMode === true
  }"
  @click="toggle"></span></button>
</template>

<style scoped></style>