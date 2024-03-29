<template>
  <div class="section-container">
    <div class="content-wrapper">
      <header>
        <img class="banner-logo" src="../assets/PetInnLogo.png" />
        <h1>Welcome To PetInn</h1>
      </header>
      <div class="search-container">
        <form action="">
          <input class="search-bar" type="text" placeholder="Search.." name="search" />
          <button class="search-button" type="submit"><img class="search-icon" src="../assets/searching.png">Search</button>
        </form>
      </div>
      <div class="check-container">
          <label for="category">I'm looking for service for my:</label> 
          <input type="radio" id="dogs" name="category" value="dogs" />
          <label for="dogs">Dogs</label>
          <input type="radio" id="cats" name="category" value="cats" />
          <label for="cats">Cats</label>
          <input type="radio" id="bunny" name="category" value="bunny" />
          <label for="bunny">Bunny</label>
          <input type="radio" id="other" name="category" value="other" />
          <label for="other">Other</label>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
header {
  margin: auto;
  display: flex;

}
h1 {
  margin: auto;
  margin-left: 0 !important;
}
.banner-logo{
  max-width: 80px;
  margin: auto;
  margin-right: 1rem;
  border-radius: 1rem;
}
.search-container, .check-container{
  margin-top: 1rem;
}
.search-icon{
  max-width: 20px;
  margin-right: 0.5rem;
}
.search-bar{
  background-color: #d4eaef;
  width: 80%;
  margin-right: 1rem !important;
  border-radius: 0.5rem;
}
.search-button{
  border-radius: 0.5rem;
  font-weight: 700;
}
.check-container input{
  margin-left: 1.5rem;
  margin-right: 0.5rem;
  accent-color: rgb(227, 102, 133);
}
label{
    font-weight: 700;
}
</style>
