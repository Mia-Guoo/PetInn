<template>
  <div class="section-container">
    <div class="content-wrapper" id="booking">
      <div class="row booking-elements">
        <!-- Form for user to enter -->
        <div class="col form-container">
          <form>
            <div class="mb-3">
              <!-- Select dropdown -->
              <label for="serviceType" class="form-label">Service Type</label
              ><br />
              <select name="serviceType" id="service-type">
                <option
                  v-for="type in serviceTypes"
                  :key="type.name"
                  :value="type.value"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'house']" /> -->
                  {{ type.name }}
                </option>
              </select>
              <br />
              <!-- Location -->
              <label for="location" class="form-label">Service Near</label
              ><br />
              <input type="text" id="location" name="location" />
              <p id="location-prop" class="form-text">
                You can also select an address from the map.
              </p>
              <!-- Dates -->
              <label for="exampleInputPassword1" class="form-label">Dates</label
              ><br />
              <input type="date" id="start-date" />
              <label for="exampleInputPassword1" class="form-label">
                &rarr;</label
              >
              <input type="date" id="end-date" />
            </div>
          </form>
        </div>
        <!-- Service display section -->
        <div class="col search-services">
          <p>
            Your sitter takes care of your pets and your home. Your pets will
            get all the attention they need without leaving home.
          </p>
          <p>
            Your sitter takes care of your pets and your home. Your pets will
            get all the attention they need without leaving home.
          </p>
          <p>
            Your sitter takes care of your pets and your home. Your pets will
            get all the attention they need without leaving home.
          </p>
          <p>
            Your sitter takes care of your pets and your home. Your pets will
            get all the attention they need without leaving home.
          </p>
        </div>
        <!-- Map -->
        <div class="col map-container">
          <GMapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="height: 400px; border-radius: 0.5rem; padding: 1rem;"
          >
          </GMapMap>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      serviceTypes: [
        {
          name: "House Sitting",
          value: "house sitting",
          icon: "fas fa-house",
        },
        {
          name: "Dog Walking",
          value: "dog walking",
          icon: "fas fa-dog-leashed",
        },
        {
          name: "Pets Day Care",
          value: "pets day care",
          icon: "far fa-paw",
        },
        {
          name: "Pets Training",
          value: "pets training",
          icon: "fas fa-paw-claws",
        },
      ],
    };
  },
};
</script>
<style>
.row {
  gap: 1rem;
}
.col {
  background-color: #d4eaef;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.service-type-icon {
  max-width: 15px;
}
.form-container label {
  margin-top: 1rem;
}
.form-container input {
  border-radius: 0.5rem;
}
@media (max-width: 576px) {
  .booking-elements {
    flex-direction: column;
  }
}
</style>
