<template>
  <div class="section-container">
    <div class="content-wrapper" id="about" style="display: flex">
      <div>
        <header class="section-header">
          <h2>Our Services for Pets</h2>
        </header>
        <div class="services-list">
          <service-card
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
          ></service-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceCard from "../components/ServiceCard.vue";
export default {
  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          title: "House Sitting",
          description:
            "Your sitter takes care of your pets and your home. Your pets will get all the attention they need without leaving home.",
        },
        {
          title: "Dog Walking",
          description:
            "Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.",
        },
        {
          title: "Pets Day Care",
          description:
            "Your pet spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
        },
        {
          title: "Pets Training",
          description:
            "Private, virtual pet training through GoodPet. Train from the comfort of your home through 1-1 video chat.",
        },
      ],
    };
  },
};
</script>
<style>
.services-list {
  display: flex;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
}
@media (max-width: 576px) {
  .services-list {
    flex-direction: column;
  }
}
header h2 {
  margin: auto;
  margin-bottom: 1rem !important;
}
</style>
