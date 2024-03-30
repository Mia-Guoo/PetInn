<template>
  <div class="section-container">
    <div class="content-wrapper" id="contact">
      <header class="section-header">
        <h2>Contact Us</h2>
      </header>
      <form action="/action_page.php">
        <label for="name">First Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
          style="height: 200px"
        ></textarea>

        <div style="text-align: center">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>
<script></script>
<style>
#contact input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 0.5rem;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
#contact input[type="submit"] {
   border-radius: 0.5rem !important;
   min-width: 100px;
}
input[type="submit"]:hover {
   background-color: #65bbc2;
}
</style>
