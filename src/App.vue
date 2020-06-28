<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" >Dictionary</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class='nav-item nav-link'>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/find" class='nav-item nav-link'>Find A Word</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class='nav-item nav-link'>Submit A Translation</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Type a word" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Quick Search</button>
        </form>
      </div>
    </nav>
    <div class="container ">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
