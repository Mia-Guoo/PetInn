<template>
  <div class="wrapper">
    <Nav></Nav>
    <Hero></Hero>
    <about></about>
    <booking></booking>
    <contact></contact>
  </div>
</template>

<script setup>
import Nav from "./layouts/Nav.vue";
import Hero from  "./layouts/Hero.vue";
import About from "./layouts/About.vue";
import Booking from "./layouts/Booking.vue";
import Contact from "./layouts/Contact.vue";
</script>
<style scoped>
/* *{
  font-family: fantasy;
} */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
