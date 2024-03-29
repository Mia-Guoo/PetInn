<template>
  <div class="section-container">
    <div class="content-wrapper" id="about" style="display: flex">
      <div>
        <header class="section-header">
          <h2>Our Services for Pets</h2>
        </header>
        <div class="services">
          <service-card></service-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceCard from '../components/ServiceCard.vue'
export default{
  components: { ServiceCard },
}
</script>
<style>
</style>
