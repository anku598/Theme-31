<template>
  <v-app id="main">
    <v-content>
      <!-- <h3 class="titleHome">Workforce resume theme</h3>
      <ul class="mynav d-flex">
        <li v-for="(theme,i) in routes" :key="i">
          <router-link :to="theme.path">{{theme.name}}</router-link>
        </li>
      </ul>-->
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
        { name: 'Theme2', path: '/theme2' }
      ],
      dataFreelancer: freelancer
    };
  }
};
</script>

<style lang = 'scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap|Material+Icons');
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html,
body {
  line-height: 1.2;
}

body {
  position: relative;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
}

.theme--light.v-application {
  background: #f2f5f9;
}

a {
  text-decoration: none;
}

b,
strong {
  display: inline-block;
  font-weight: 500;
}

h1,
h2,
h3,
h4 {
  font-weight: 700;
}

audio,
canvas,
iframe,
svg,
video,
img {
  vertical-align: middle;
}

hr {
  display: block;
  height: 1px;
  margin: 1rem 0;
  padding: 0;
  border: 0;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

textarea {
  resize: none;
}

input::-moz-focus-inner {
  border: 0;
}

input:focus {
  border: 0;
}

a[href],
button {
  touch-action: manipulation;
}

figure {
  margin: 0;
}

body::after,
body::before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  visibility: hidden;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

a {
  position: relative;
  color: inherit;
  text-decoration: none;

  &:active,
  &:visited {
    color: inherit;
  }

  @at-root .pointerevents:not(.touchevents) &:hover {
    text-decoration: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}

blockquote {
  margin-bottom: 2em;
  font-style: italic;
}

iframe,
object,
embed {
  width: 100%;
}

/* My nav Style here  */

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
</style>
