<template>
  <div id="nav">
    <router-link to="/">Portfolio</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/pricelist">Pricelist</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: "Cuprum", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 3rem;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
