<script setup lang="ts"></script>

<template>
  <header class="header">
    <img width="80" src="../../assets/rviewer-logo.svg" class="rviewerLogo" alt="Rviewer logo"/>
    <h3>
      Welcome to the Rviewer Vue skeleton!
    </h3>
  </header>
</template>

<style>
.rviewerLogo {
  margin: 3rem 0;
}

.header {
  align-items: center;
  border-bottom: 1px solid #4FFAB6;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(1rem + 2vmin);
  justify-content: center;
  margin: auto;
  max-width: 90vw;
  text-align: center;
}

@media (min-width: 1200px) {
  .header {
    max-width: 60vw;
  }
}
</style>
