<template>
  <v-app id="main">
    <v-content>
      <h3 class="titleHome">Workforce resume theme</h3>
      <ul class="mynav d-flex">
        <li v-for="(theme,i) in routes" :key="i">
          <router-link :to="theme.path">{{theme.name}}</router-link>
        </li>
      </ul>
      <router-view :freelancer="dataFreelancer"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import freelancer from './static/freelancer.json';

export default {
  name: 'App',
  data() {
    return {
      routes: [
        { name: 'Theme31', path: '/' },
        { name: 'Theme17', path: '/theme17' }
      ],
      dataFreelancer: freelancer
    };
  }
};
</script>

<style lang = 'scss'>
/* My nav Style here  */

a {
  text-decoration: none;
}

.titleHome {
  text-align: center;
  margin: 1.5rem 0 1rem 0;
  text-transform: uppercase;
  color: #050505;
}

.mynav {
  display: flex;
  justify-content: center;
  li {
    list-style: none;
    padding: 5px;
    a {
      color: #050505 !important;
      text-transform: capitalize;
      font-weight: 700;
    }
  }
}

.mynav li a.router-link-exact-active {
  color: #ff5252 !important;
}

.progress-bg {
  .v-progress-linear__determinate {
    background: linear-gradient(
      138.05deg,
      #f9bfda 1.07%,
      #ffcad0 51.95%,
      #fdbeba 89.88%
    );
  }
}
</style>
