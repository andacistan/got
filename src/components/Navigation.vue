<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">GOT</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/houses" class="nav-link" active-class="active"
            >Houses</router-link
          >
          <router-link to="/persons" class="nav-link" active-class="active"
            >Persons</router-link
          >
          <router-link to="/quotes" class="nav-link" active-class="active"
            >Quotes</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar {
  background-color: #872341!important;
}
</style>