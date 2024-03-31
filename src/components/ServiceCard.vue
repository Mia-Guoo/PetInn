<template>
  <div class="service-card">
    <h3 class="service-title">{{ title }}</h3>
    <div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description"],
};
</script>
<style>
.service-title{
    font-size: 20px;
    text-align: center;

}
.service-card{
    min-height: 200px;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    background-color: #d4eaef;
    padding: 1rem;
    border: 1px solid darkorange;
}
        </style>
