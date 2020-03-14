<template>
  <div id="resumeTheme17">
    <p>Work on progress</p>
    <v-container class="hold_theme17" fluid>
      <div class="freelancerProfileCard">
        <div class="header-section">
          <v-container fluid>
            <v-row class="profileCard">
              <v-col lg="auto">
                <div class="profile-info">
                  <div class="profile-img"></div>
                  <div class="freelancer-name">
                    <h2>paul Porter</h2>
                    <p>Web Designer</p>
                    <div class="hold_social_link">
                      <a href="#">
                        <img src="@/assets/behance.svg" alt="behance" />
                      </a>
                      <a href="#">
                        <img src="@/assets/dribble.svg" alt="dribble" />
                      </a>
                      <a href="#">
                        <img src="@/assets/instagram.svg" alt="instagram" />
                      </a>
                      <a href="#">
                        <img src="@/assets/linked-in.svg" alt="linkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col lg="auto">
                <div class="hire-me-section">
                  <div class="availability">
                    <div class="available-nav-link">
                      <a href="#">Monthly</a>
                      <a class="active" href="#">Weekly</a>
                      <a href="#">hourly</a>
                    </div>
                    <div class="available-info">
                      <h2>rate $ USD</h2>
                      <p>$160</p>
                    </div>
                  </div>
                  <span class="border-spacer"></span>
                  <div class="availability">
                    <div class="available-nav-link">
                      <a href="#">Monthly</a>
                      <a class="active" href="#">Weekly</a>
                      <a href="#">hourly</a>
                    </div>
                    <div class="available-info">
                      <h2>Availability Hours</h2>
                      <p>40 hours</p>
                    </div>
                  </div>

                  <a href="#" class="hire-me-btn">Hire Me</a>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Theme17',
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,700&display=swap');
@font-face {
  font-family: 'Gotham Pro';
  src: url('../assets/fonts/Gotham Pro Regular.eot') format('embedded-opentype'),
    url('../assets/fonts/Gotham Pro Regular.otf') format('opentype'),
    url('../assets/fonts/Gotham Pro Regular.woff') format('woff'),
    url('../assets/fonts/Gotham Pro Regular.ttf') format('truetype'),
    url('../assets/fonts/Gotham Pro Regular.svg#Gotham Pro') format('svg');
  font-weight: normal;
  font-style: normal;
}
//  Base Css Here Start

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
  background: #e5e5e5;
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

/* Base Css Here End */

a {
  text-decoration: none;
}

img {
  width: 100%;
}

// Theme 17 All style start here

.container {
  padding: 0;
}

.hold_theme17 {
  max-width: 1920px;
}

.freelancerProfileCard {
  width: 100%;
  margin: 0 auto;
}

.header-section {
  min-height: 170px;
  background: #fff;
  box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.03);
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  display: flex;
}

.profileCard {
  justify-content: space-between;
  align-items: center;
}

.profile-info {
  display: flex;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url('../assets/img/resume17/profile-pic.png') no-repeat;
  background-size: contain;
  margin-right: 15px;
}

.freelancer-name {
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  h2,
  p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    letter-spacing: 0.3em;
    text-transform: capitalize;
    color: #25272b;
  }
}

.hold_social_link {
  display: flex;
  align-items: center;

  a {
    margin-right: 27px;
    img {
      height: 17px;
    }
  }
}

.hire-me-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  .availability {
    display: flex;
    padding: 0 20px;

    .available-nav-link {
      a {
        display: block;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: capitalize;
        color: #5b5d60;
        text-align: left;
        &.active {
          color: #5b5d60;
          font-weight: 700;
        }
      }
    }

    .available-info {
      margin-left: 20px;
      h2 {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: capitalize;
        color: #2176e5;
      }
      p {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 29px;
        text-align: left;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #5b5d60;
        margin-bottom: 0;
      }
    }
  }

  .border-spacer {
    width: 1px;
    background: rgba(16, 78, 251, 0.2);
    height: 40px;
  }

  .hire-me-btn {
    background: #2176e5;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 0px;
    letter-spacing: 4px;
    text-transform: capitalize;
    color: #ffffff;
    display: block;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
}
</style>