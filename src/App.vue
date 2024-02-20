<template>
  <nav>
    <router-link to="/">Locations</router-link> |
    <router-link to="/locations/create">Create</router-link> |

    <router-link to="/participants">Participants</router-link> |
    <router-link to="/participants/create">Create</router-link>
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
</style>
