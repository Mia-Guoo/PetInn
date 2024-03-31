<template>
  <div class="sign-container">
    <Nav></Nav>
    <!-- Sign In -->
    <div class="section-container">
      <div class="content-wrapper">
        <form class="modal-content" action="/action_page.php">
          <div class="container">
            <h2>Sign In</h2>
            <label for="signin-email"><b>Email</b></label>
            <input
              type="text"
              id="signin-email"
              placeholder="Enter Email"
              name="email"
              required
            /><br />

            <label for="signin-psw"><b>Password</b></label>
            <input
              type="password"
              id="signin-psw"
              placeholder="Enter Password"
              name="psw"
              required
            /><br />
            <button type="submit" class="signinbtn">Sign In</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Sign Up -->
    <div class="section-container">
      <div class="content-wrapper">
        <div id="sign-up">
          <form class="modal-content" action="/action_page.php">
            <div class="container">
              <h2>Sign Up</h2>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <label for="name"><b>Name</b></label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                required
                v-model="User.username"
              /><br />
              <label for="email"><b>Email</b></label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                name="email"
                required
                v-model="User.email"
              /><br />

              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                id="psw"
                placeholder="Enter Password"
                name="psw"
                required
                v-model="User.password"
              /><br />

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input
                type="password"
                id="psw-repeat"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
                v-model="reppassword"
              /><br />
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
                <button type="submit" class="signupbtn" @click="addUser">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import axios from "axios";
export default {
  components: { Nav },
  data() {
    return {
      reppassword: "",
      User: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async addUser(event) {
      event.preventDefault();
      let newUser = {
        username: this.User.username,
        email: this.User.email,
        password: this.User.password,
      };

      if (newUser.password != this.reppassword) {
        alert("Two passwords are not match.");
      } else {
        // Check if email is in the proper format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newUser.email)) {
          alert("Please enter a valid email address.");
          return;
        }
        console.log(newUser);
        try {
          const response = await axios.post(
            "http://localhost:3000/api/users",
            newUser
          );
          console.log(response.data);
          alert("User is signed up!");
          (this.User.name = ""),
            (this.User.email = ""),
            (this.User.password = ""),
            (this.reppassword = "");
        } catch (error) {
          console.error(error.response.data);
          console.error(error);
        }
      }
    },
  },
};
</script>
<style>
.sign-container input,
button {
  border-radius: 0.5rem !important;
}
button {
  margin-right: 1rem !important;
  min-width: 70px;
}
button:hover {
  background-color: #65bbc2;
}
.sign-container h2 {
  text-align: center;
  margin-bottom: 1rem !important;
}
.sign-container input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background-color: #d3ebf6;
}
</style>
