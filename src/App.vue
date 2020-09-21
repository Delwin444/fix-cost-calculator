<template>
  <div id="app">
    <!--    <div id="nav">
          <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
        </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: $dark-shade;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  background: $light-shade;
  padding: $grid-size;
}

ul {
  padding: 0;
  list-style: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input {
  &[type='text'],
  &[type='number'] {
    border-radius: 10px/4px;
    padding: 4px 6px;
    border: 0;
    border-bottom: 1px solid $dark-shade;
    background: transparent;

    &:focus {
      outline: 0;
    }
  }
}
</style>
