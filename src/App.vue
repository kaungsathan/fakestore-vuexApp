<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/shop">Shop</router-link> |

    <router-link to="/cart" class="position-relative p-1">
      Cart
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
        v-if="this.$store.state.cart == 0">
        <span class="visually-hidden">unread messages</span>
      </span>

      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
        v-if="this.$store.state.cart != 0">
        {{ this.$store.state.cart }}
        <span class="visually-hidden">unread messages</span>
      </span>
    </router-link>
  </nav> -->

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Fake Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
          <router-link to="/shop" class="nav-link" href="#">Shop</router-link>
          <router-link to="/about" class="nav-link" href="#">About</router-link>
          <router-link to="/cart" class="nav-link position-relative" href="#">
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
              v-if="this.$store.state.cart == 0">
              <span class="visually-hidden">unread messages</span>
            </span>

            <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-dark"
              v-if="this.$store.state.cart != 0">
              {{ this.$store.state.cart }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
