<template>
  <div style="min-height:80px;">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img class="pet-inn-logo" src="../assets/PetInnLogo.png">
        <a class="navbar-brand" href="index.html">PetInn</a>
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
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html#about"
                ><img class="nav-icon" src="../assets/paw.png" />About</a
              >
            </li>
                        <li class="nav-item">
              <a class="nav-link" href="/index.html#booking"
                ><img class="nav-icon" src="../assets/booking.png" />Booking</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/index.html#contact"
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
.navbar{
  padding: 0 !important;
}
.navbar-brand {
  font-size: 20px;
}
.pet-inn-logo {
  width: 80px;
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
  min-height: 70px;
}
.nav-item {
  background-color: #b5c8c9;
  border-radius: 0.5rem;
  margin: 0.5rem 1rem 0.5rem 1rem;
  min-width: 150px;
}
.nav-link{
  font-weight: 700 !important;
}
</style>
