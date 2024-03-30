<template>
  <div class="sign-container">
    <!-- Sign In -->
    <div class="section-container">
      <div class="content-wrapper" id="booking">
        <form class="modal-content" action="/action_page.php">
          <div class="container">
            <h2>Sign In</h2>
            <label for="email"><b>Email</b></label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              name="email"
              required
            /><br>

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              id="psw"
              placeholder="Enter Password"
              name="psw"
              required
            /><br>
            <button type="submit" class="signinbtn">Sign In</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Sign Up -->
    <div class="section-container">
      <div class="content-wrapper" id="booking">
        <div id="sign-up">
          <form class="modal-content" action="/action_page.php">
            <div class="container">
              <h2>Sign Up</h2>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <label for="email"><b>Email</b></label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                name="email"
                required
              /><br>

              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                id="psw"
                placeholder="Enter Password"
                name="psw"
                required
              /><br>

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input
                type="password"
                id="psw-repeat"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              /><br>
              <p>
                By creating an account you agree to our
                <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
              </p>

              <div class="clearfix">
                <button
                  type="button"
                  onclick="document.getElementById('id01').style.display='none'"
                  class="cancelbtn"
                >
                  Cancel
                </button>
                <button type="submit" class="signupbtn">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style>
.sign-container input, button{
    border-radius: 0.5rem !important;
}
button{
    margin-right: 1rem !important;
    min-width: 70px;
}
button:hover{
    background-color: #65bbc2;
}
.sign-container h2{
    text-align: center;
    margin-bottom: 1rem !important;
}
.sign-container input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background-color: #d3ebf6;
}
</style>
