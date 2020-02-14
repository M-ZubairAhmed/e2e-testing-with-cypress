<template>
  <main class="d-flex justify-content-center align-items-center flex-column">
    <!-- Logo -->
    <img alt="Vue hyderabad logo" src="./../assets/logo.png" class="hero-img" />

    <!-- Opening text -->
    <h1 class="pt-4">
      Welcome to
      <span class="font-weight-bold display-4">Vue Hyderabad</span>
    </h1>

    <!-- Card root -->
    <div class="col-8 border p-5 rounded-lg shadow-lg mt-5">
      <template v-if="!isLoggedIn">
        <!-- Login header -->
        <div class="text-center pb-4 font-italic">
          <h5>Enter your login details to continue</h5>
        </div>

        <!-- Error message -->
        <template v-if="isError && statusMessage.length !== 0">
          <div class="alert alert-danger" role="alert" data-cy="error">{{ statusMessage }}</div>
        </template>

        <!-- Success message -->
        <template v-if="!isError && statusMessage.length !== 0">
          <div class="alert alert-success" role="alert">
            {{ statusMessage }}
          </div>
        </template>

        <!-- Email input -->
        <div class="form-group">
          <label for="emailField text-small">Email</label>
          <input
            id="emailField"
            type="email"
            class="form-control form-control-lg"
            placeholder="Enter your email"
            autofocus
            v-model.trim="emailInput"
          />
        </div>

        <!-- Password input -->
        <div class="form-group mt-4">
          <label for="passwordField">Password</label>
          <input
            id="passwordField"
            type="password"
            class="form-control form-control-lg"
            placeholder="Enter your password"
            v-model.trim="passwordInput"
          />
        </div>

        <!-- Login button -->
        <div class="text-center mt-5">
          <button
            type="submit"
            class="btn btn-lg font-weight-bold"
            v-on:click.stop="onLoginPress"
          >
            LOGIN
          </button>
        </div>
      </template>
      <template v-else>
        <div
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <img
            src="./../assets/user.jpg"
            alt="user display image"
            class="user-dp"
          />
          <h3 class="mt-5">Hej, Zubair</h3>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      isError: false,
      statusMessage: "",
      isLoggedIn: false
    };
  },
  methods: {
    onLoginPress() {
      console.log("Submitting form", this.emailInput, this.passwordInput);

      if (this.emailInput.length === 0 || this.passwordInput.length === 0) {
        this.isError = true;
        this.statusMessage =
          "Email and Password both fields should be populated";
      } else if (
        this.emailInput === "zubair@email.com" &&
        this.passwordInput === "password"
      ) {
        this.isError = false;
        this.statusMessage = "Successfully logged in";
        this.isLoggedIn = true;
      } else {
        this.isError = true;
        this.statusMessage = "Invalid email or password";
      }
    }
  }
};
</script>

<style scoped>
main {
  padding: 2rem;
}
.hero-img {
  max-width: 10rem;
  border-radius: 1rem;
}

.user-dp {
  max-width: 6rem;
  border-radius: 50%;
}
button {
  background-color: #41b883;
}
</style>
