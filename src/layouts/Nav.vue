<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img class="pet-inn-logo" src="../assets/PetInnLogo.png">
        <a class="navbar-brand" href="#">PetInn</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about"
                ><img class="nav-icon" src="../assets/paw.png" />About</a
              >
            </li>
                        <li class="nav-item">
              <a class="nav-link" href="#booking"
                ><img class="nav-icon" src="../assets/booking.png" />Booking</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact"
                ><img class="nav-icon" src="../assets/chat.png" />Contact Us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="SignIn.html"
                ><img class="nav-icon" src="../assets/user.png" />Sign In/Sign Up</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script></script>
<style>
.navbar-brand {
  font-size: 20px;
}
.pet-inn-logo {
  width: 50px;
  height: auto;
  margin-right: 0.5rem;
}
.nav-icon {
  max-width: 20px;
  margin-right: 0.5rem;
}
.container-fluid {
  background-color: #d4eaef;
  border-radius: 0.5rem;
}
.nav-item {
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  margin: 0.5rem 1rem 0.5rem 1rem;
  min-width: 150px;
}
.nav-link{
  font-weight: 700 !important;
}
</style>
