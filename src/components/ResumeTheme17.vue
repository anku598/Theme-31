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
                  <div class="profile-img">
                    <a href="#">
                      <img src="@/assets/img/resume17/chat-icon.svg" alt="Chat Icon" />
                    </a>
                  </div>
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

        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="hold_tabs">
                <v-tabs
                  v-model="activeTab"
                  background-color="transparent"
                  class="main-tab"
                  active-class="isActive"
                  :centered="true"
                  :ripple="false"
                >
                  <v-tab
                    :ripple="false"
                    class="tab-item"
                    v-for="(item,idx) in resume_tabs"
                    :key="idx"
                    :href="`#tab-${idx}`"
                    @click="setTab(item)"
                  >{{ item }}</v-tab>
                </v-tabs>
              </div>
            </v-col>

            <div class="hold_contents">
              <v-tabs-items
                class="bg-transparent"
                v-model="activeTab"
                active-class="content-margin"
              >
                <v-tab-item
                  transition="fade-transition"
                  reverse-transition="fade-transition"
                  value="tab-0"
                >item one</v-tab-item>
                <v-tab-item
                  transition="fade-transition"
                  reverse-transition="fade-transition"
                  value="tab-1"
                >
                  <div class="hold_skill_tab">
                    <v-tabs
                      v-model="skillTab"
                      class="secondary-tab"
                      background-color="transparent"
                      centered
                      hide-slider
                      active-class="isActiveSkill"
                    >
                      <v-tab
                        class="skill-tab-bg"
                        v-for="(item,idx) in skillsTab"
                        :href="`#skillTab-${idx}`"
                        :key="idx"
                        @click="setTabSkill(idx)"
                        :ripple="false"
                      >{{ item }}</v-tab>
                    </v-tabs>
                  </div>

                  <v-tabs-items v-model="skillTab" class="bg-transparent">
                    <v-tab-item value="skillTab-0">
                      <div class="skill-wrap">
                        <v-col md="12" lg="12" class="box-skill px-12" cols="12" sm="12">
                          <div class="logo-skill icon_ps">Ps</div>
                          <div class="info-skill">
                            <v-progress-linear
                              class="progress-bg"
                              buffer-value="100"
                              height="15px"
                              value="95"
                              background-color="#fff"
                              :rounded="true"
                            ></v-progress-linear>
                          </div>
                        </v-col>
                      </div>
                    </v-tab-item>
                    <v-tab-item value="skillTab-1">nested tab two</v-tab-item>
                    <v-tab-item value="skillTab-2">nested tab three</v-tab-item>
                    <v-tab-item value="skillTab-4">nested tab four</v-tab-item>
                  </v-tabs-items>
                </v-tab-item>
                <v-tab-item
                  transition="fade-transition"
                  reverse-transition="fade-transition"
                  value="tab-2"
                >
                  <v-container class="mx-auto">
                    <v-carousel v-model="model" hide-delimiter-background hide-delimiters>
                      <v-carousel-item>
                        <v-row class="hold_details">
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Graphic & Web Designer</h3>
                                <p class="duration_time">2018 - 2019</p>
                              </div>
                              <div class="right">
                                <h3>Company "React"</h3>
                                <p
                                  class="com-details"
                                >- Turning creative concepts into finished websites.</p>
                                <p
                                  class="com-details"
                                >- Drawing up detailed website s pecifications.</p>
                                <p
                                  class="com-details"
                                >- Building websites that are easy to understand, navigate and use.</p>
                                <p class="com-details">- Designing sample page layouts.</p>
                                <p
                                  class="com-details"
                                >- Ensuring that the website complies with the company’s brand guidelines.</p>
                              </div>
                            </div>
                          </v-col>
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Graphic & Web Designer</h3>
                                <p class="duration_time">2018 - 2019</p>
                              </div>
                              <div class="right">
                                <h3>Company "React"</h3>
                                <p>- Turning creative concepts into finished websites.</p>
                                <p>- Drawing up detailed website s pecifications.</p>
                                <p>- Building websites that are easy to understand, navigate and use.</p>
                                <p>- Designing sample page layouts.</p>
                                <p>- Ensuring that the website complies with the company’s brand guidelines..</p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-carousel-item>

                      <v-carousel-item>
                        <v-row class="hold_details">
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Graphic & Web Designer</h3>
                                <p class="duration_time">2018 - 2019</p>
                              </div>
                              <div class="right">
                                <h3>Company "React"</h3>
                                <p
                                  class="com-details"
                                >- Turning creative concepts into finished websites.</p>
                                <p
                                  class="com-details"
                                >- Drawing up detailed website s pecifications.</p>
                                <p
                                  class="com-details"
                                >- Building websites that are easy to understand, navigate and use.</p>
                                <p class="com-details">- Designing sample page layouts.</p>
                                <p
                                  class="com-details"
                                >- Ensuring that the website complies with the company’s brand guidelines.</p>
                              </div>
                            </div>
                          </v-col>
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Graphic & Web Designer</h3>
                                <p class="duration_time">2018 - 2019</p>
                              </div>
                              <div class="right">
                                <h3>Company "React"</h3>
                                <p>- Turning creative concepts into finished websites.</p>
                                <p>- Drawing up detailed website s pecifications.</p>
                                <p>- Building websites that are easy to understand, navigate and use.</p>
                                <p>- Designing sample page layouts.</p>
                                <p>- Ensuring that the website complies with the company’s brand guidelines..</p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-tab-item>
                <v-tab-item
                  transition="fade-transition"
                  reverse-transition="fade-transition"
                  value="tab-3"
                >
                  <v-container class="mx-auto">
                    <v-carousel v-model="model" hide-delimiter-background hide-delimiters>
                      <v-carousel-item>
                        <v-row class="hold_details">
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Master in Web Developer</h3>
                                <p class="duration_time">2015 - 2016</p>
                              </div>
                              <div class="right">
                                <h3>Envision Media, Inc., Santa Cruz, CA</h3>
                                <p
                                  class="com-details"
                                >- Turning creative concepts into finished websites.</p>
                                <p
                                  class="com-details"
                                >- Drawing up detailed website s pecifications.</p>
                                <p
                                  class="com-details"
                                >- Building websites that are easy to understand, navigate and use.</p>
                                <p class="com-details">- Designing sample page layouts.</p>
                                <p
                                  class="com-details"
                                >- Ensuring that the website complies with the company’s brand guidelines.</p>
                              </div>
                            </div>
                          </v-col>
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Master in Web Developer</h3>
                                <p class="duration_time">2015 - 2016</p>
                              </div>
                              <div class="right">
                                <h3>Envision Media, Inc., Santa Cruz, CA</h3>
                                <p>- Turning creative concepts into finished websites.</p>
                                <p>- Drawing up detailed website s pecifications.</p>
                                <p>- Building websites that are easy to understand, navigate and use.</p>
                                <p>- Designing sample page layouts.</p>
                                <p>- Ensuring that the website complies with the company’s brand guidelines..</p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-carousel-item>

                      <v-carousel-item>
                        <v-row class="hold_details">
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Master in Web Developer</h3>
                                <p class="duration_time">2015 - 2016</p>
                              </div>
                              <div class="right">
                                <h3>Envision Media, Inc., Santa Cruz, CA</h3>
                                <p
                                  class="com-details"
                                >- Turning creative concepts into finished websites.</p>
                                <p
                                  class="com-details"
                                >- Drawing up detailed website s pecifications.</p>
                                <p
                                  class="com-details"
                                >- Building websites that are easy to understand, navigate and use.</p>
                                <p class="com-details">- Designing sample page layouts.</p>
                                <p
                                  class="com-details"
                                >- Ensuring that the website complies with the company’s brand guidelines.</p>
                              </div>
                            </div>
                          </v-col>
                          <v-col lg="6">
                            <div class="hold_details_info">
                              <div class="left">
                                <h3>Master in Web Developer</h3>
                                <p class="duration_time">2015 - 2016</p>
                              </div>
                              <div class="right">
                                <h3>Envision Media, Inc., Santa Cruz, CA</h3>
                                <p>- Turning creative concepts into finished websites.</p>
                                <p>- Drawing up detailed website s pecifications.</p>
                                <p>- Building websites that are easy to understand, navigate and use.</p>
                                <p>- Designing sample page layouts.</p>
                                <p>- Ensuring that the website complies with the company’s brand guidelines..</p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-tab-item>
                <v-tab-item
                  transition="fade-transition"
                  reverse-transition="fade-transition"
                  value="tab-4"
                >
                  <v-container>
                    <div class="hold_video">
                      <v-row>
                        <v-col lg="6">
                          <div class="video">
                            <vue-core-video-player src="./videos/your_video.mp4"></vue-core-video-player>
                          </div>
                        </v-col>
                        <v-col lg="6">
                          <div class="play-btn">button</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player';
export default {
  name: 'Theme17',
  components: {
    VueCoreVideoPlayer
  },
  data() {
    return {
      activeTab: null,
      skillTab: null,
      typeSkill: '',
      model: 0,
      currentTab: null,
      resume_tabs: ['portfolio', 'skills', 'work', 'education', 'interviews'],
      skillsTab: [
        'Programming languages',
        'Frameworks/ Databases',
        'Design Skills',
        'Software'
      ]
    };
  },

  methods: {
    setTab(tabName) {
      this.currentTab = tabName;
    },
    setTabSkill(i) {
      this.typeSkill = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Actor&display=swap');
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

// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap|Material+Icons');

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
  overflow: hidden;
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
  position: relative;
  a {
    position: absolute;
    right: 0;
    top: 73px;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.05);
    img {
      height: 14px;
    }
  }
}

.freelancer-name {
  margin-left: 20px;
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

// main tabs Style Here
.hold_tabs,
.hold_contents {
  margin-top: 73px;
}

.tab-item {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 0px;
  letter-spacing: 0.25em;
  text-transform: capitalize;
  color: rgba(16, 36, 195, 0.3) !important;
  transition: all 0.3s ease-out;
  &.isActive {
    font-size: 24px;
    line-height: 0px;
    letter-spacing: 0.25em;
    text-transform: capitalize;
    font-weight: 700;
    color: #2176e5 !important;
  }
}
.v-slide-group__prev {
  display: none !important;
}

// main Content Style Here
.hold_contents {
  width: 100%;

  .theme--light.v-tabs-items {
    min-height: 50vh;
  }
}

.skill-wrap {
  width: 65%;
  margin: 0 auto;
  .box-skill {
    display: inline-flex;

    align-items: center;
    justify-content: space-between;
  }
  .logo-skill {
    width: 50px;
    height: 50px;

    background: #222d68;
    border: 5px solid #fdbfbc;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    position: relative;
    font-family: Rubik;
    font-style: normal;
  }

  .info-skill {
    width: 90%;
  }
}

.hold_details_info {
  display: flex;
  .left {
    flex-basis: 20%;
  }
  .right {
    flex-basis: 80%;
  }

  h3 {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #5b5d60 !important;
    margin-bottom: 20px;
  }
  .duration_time {
    font-family: Actor;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 19px;
    color: #5b5d60 !important;
    margin-top: 20px;
  }

  .com-details {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: rgba(91, 93, 96, 0.8) !important;
  }
}
</style>