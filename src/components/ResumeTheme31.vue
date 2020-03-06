<template>
  <div id="ResumeTheme31">
    <v-container class="hold_theme13" fluid>
      <v-row class="freelancerCard">
        <v-col lg="12" md="12" cols="12" class="resumeCardRight">
          <v-row>
            <v-col lg="7">
              <v-card class="profile-bg-card">
                <div class="profile-info">
                  <v-row>
                    <v-col lg="2">
                      <v-avatar size="100" class="mr-2">
                        <img src="../assets/img/profile-pic.png" alt />
                      </v-avatar>
                    </v-col>

                    <v-col lg="6">
                      <div class="name-info">
                        <h2 class="freelancer-name">Beverly Andrews</h2>
                        <p>User interface designer</p>
                      </div>

                      <div class="resume">
                        <a href="#">
                          <v-icon>mdi-email</v-icon>
                        </a>
                        <a href="#" class="download">
                          <span>pdf</span>
                          <v-icon>mdi-download</v-icon>
                        </a>
                      </div>
                    </v-col>

                    <v-col lg="4">
                      <div class="social-wrap">
                        <a href="#">
                          <v-icon>mdi-map-marker</v-icon>
                        </a>
                        <a href="#">
                          <v-icon>mdi-whatsapp</v-icon>
                        </a>
                        <a href="#">
                          <v-icon>mdi-google-plus</v-icon>
                        </a>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>

            <v-col lg="5" class="d-flex justify-end">
              <div class="social-wrap">
                <a href="#">
                  <v-icon>mdi-map-marker</v-icon>
                </a>
                <a href="#">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
                <a href="#">
                  <v-icon>mdi-google-plus</v-icon>
                </a>
              </div>
            </v-col>

            <v-col>
              <div class="hold-tabs">
                <v-tabs
                  v-model="activeTab"
                  background-color="transparent"
                  class="main-tab"
                  hide-slider
                  active-class="isActive"
                >
                  <v-tab
                    class="tab-bg mr-8"
                    v-for="(item,idx) in freelancer.agent.resume_tabs"
                    :key="'tab' + idx"
                    :ripple="false"
                  >
                    <v-icon class="tab-icon">mdi-{{item.icon}}</v-icon>
                    {{ item.label }}
                  </v-tab>
                </v-tabs>
              </div>
            </v-col>

            <div class="hold-contents">
              <v-tabs-items class="bg-transparent" v-model="activeTab">
                <v-col>
                  <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
                    <div class="content">
                      <h2 class="display-1">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo illum ex quae animi modi molestias</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo illum ex quae animi modi molestias</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo illum ex quae animi modi molestias</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo illum ex quae animi modi molestias</p>
                    </div>
                  </v-tab-item>
                </v-col>

                <v-col>
                  <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
                    <v-row>
                      <v-col sm="6" md="3" lg="3" xl="3" cols="12">
                        <img src="@/assets/img/portfolio-1.png" alt="Portfolio Image" />
                      </v-col>
                      <v-col lg="3" md="3" sm="6" xl="3" cols="12">
                        <img src="@/assets/img/portfolio-2.png" alt="Portfolio Image" />
                      </v-col>
                      <v-col cols="12" lg="3" md="3" sm="6" xl="3">
                        <img src="@/assets/img/potfolio-3.png" alt="Portfolio Image" />
                      </v-col>
                      <v-col cols="12" lg="3" md="3" sm="6" xl="3">
                        <img src="@/assets/img/portfolio-4.png" alt="Portfolio Image" />
                      </v-col>
                      <v-col cols="12" lg="3" md="3" sm="6" xl="3">
                        <img src="@/assets/img/portfolio-5.png" alt="Portfolio Image" />
                      </v-col>
                      <v-col cols="12" lg="3" md="3" sm="6" xl="3">
                        <img src="@/assets/img/portfolio-5.png" alt="Portfolio Image" />
                      </v-col>
                    </v-row>
                  </v-tab-item>
                </v-col>

                <v-col>
                  <v-tab-item
                    class="works"
                    transition="fade-transition"
                    reverse-transition="fade-transition"
                  >
                    <v-row>
                      <v-col sm="12" md="6" lg="6" xl="6" cols="12" pb="3">
                        <v-card class="bg-card">
                          <v-row>
                            <v-col md="2" cols="2">
                              <div class="avatar ml-2">
                                <img src="@/assets/img/works-icon.png" alt="Works Icon" />
                              </div>
                            </v-col>

                            <v-col
                              md="3"
                              sm="10"
                              cols="10"
                              class="company-info ml-auto hidden-sm-and-down"
                            >
                              <h2 class="company-title">Google</h2>
                              <div>
                                <p class="small-text">duration:</p>
                                <p class="date">Dec 19 - Present</p>
                              </div>
                            </v-col>

                            <v-col
                              md="7"
                              sm="10"
                              cols="10"
                              class="job-info ml-auto hidden-sm-and-down"
                            >
                              <p class="job-title">User interface designer</p>
                              <p
                                class="desc"
                              >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes.</p>
                            </v-col>

                            <v-col
                              md="3"
                              sm="10"
                              cols="10"
                              class="company-info ml-auto hidden-sm-and-up"
                            >
                              <h2 class="company-title">Google</h2>
                              <p class="job-title">User interface designer</p>
                              <div class="d-inline-flex align-center mt-4 mb-4">
                                <p class="small-text mr-1">duration:</p>
                                <p class="date">Dec 19 - Present</p>
                              </div>
                              <p
                                class="desc"
                              >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes.</p>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-tab-item>
                </v-col>
                <v-col>
                  <v-tab-item
                    class="education"
                    transition="fade-transition"
                    reverse-transition="fade-transition"
                  >
                    <v-row>
                      <v-col sm="12" md="6" lg="6" xl="6" cols="12" pb="3">
                        <v-card class="bg-card">
                          <v-row>
                            <v-col md="2" cols="2">
                              <div class="avatar ml-2">
                                <img src="@/assets/img/works-icon.png" alt="Works Icon" />
                              </div>
                            </v-col>

                            <v-col
                              md="10"
                              sm="10"
                              cols="10"
                              class="company-info hidden-sm-and-down"
                            >
                              <h2 class="company-title">California Institute of Technology</h2>
                              <div class="d-flex align-center justify-space-between small-info">
                                <div class="d-flex align-center">
                                  <p class="small-text">M.Sc in HCI</p>
                                  <p class="date">Dec 19 - Present</p>
                                </div>
                                <p class="university">university</p>
                              </div>
                              <p
                                class="desc"
                              >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes.</p>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-tab-item>
                </v-col>
              </v-tabs-items>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap|Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');
a {
  text-decoration: none;
}

img {
  width: 100%;
}
.profile-bg-card {
  background: linear-gradient(
    99.62deg,
    #f9bfda 1.07%,
    #ffcad0 51.95%,
    #fdbeba 89.88%
  );
  box-shadow: 0px 4px 20px rgba(253, 191, 187, 0.44) !important;
  border-radius: 10px 10px 200px 10px !important;
  padding: 2rem;
}
.hold_theme13 {
  max-width: 1460px;
  margin: 0 auto;
}

.v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
}

.resume {
  display: flex;
  align-items: center;
}

.resume,
.social-wrap {
  a {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50%;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    background: #fff;
    display: none;
    margin: 5px;

    box-shadow: 0px 0px 20px rgba(187, 209, 244, 0.25);
    &.download {
      background: #fec8d1 !important;
      border: 5px solid #ffffff !important;
      box-sizing: border-box !important;
      padding: 27px;
      display: flex;
      flex-direction: column;

      span {
        text-transform: uppercase;
        color: #222d68;
        font-weight: 600;
        font-size: 13px;
      }
    }
    i {
      color: #222d68 !important;
      font-size: 30px;
    }
  }
}

.name-info {
  .freelancer-name {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    line-height: 47px;
    color: #222d68;
    font-size: 1.8rem !important;
    text-transform: capitalize;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: #fff;
    text-transform: inherit;
  }
}

.hold-tabs {
  width: 100%;
  margin: 3rem 0;
  .main-tab {
    width: 100%;
  }

  .tab-bg {
    width: 200px !important;
    background: linear-gradient(
      99.48deg,
      #f9bfda 1.07%,
      #ffcad0 51.95%,
      #fdbeba 89.88%
    );
    opacity: 0.4;
    border-radius: 5px 5px 60px 5px;
    color: #222d68 !important;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    &.isActive {
      opacity: 1;
    }
  }
}

.tab-icon {
  margin-right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(187, 209, 244, 0.25);
  font-size: 14px !important;
}

.v-tabs-slider {
  display: none !important;
}

.hold-contents {
  width: 100%;
  min-height: 100%;
  .content {
    padding: 5rem 2rem;
    background: #ffffff;
    box-shadow: 0px 0px 25px #e4eaf4;
    border-radius: 20px 20px 260px 20px;
    margin-top: 2rem;

    h2 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: 42px;
      color: #fdbebb;
    }
  }

  .bg-transparent {
    background: transparent !important;
    min-height: 100%;
  }
}

.works {
  .bg-card {
    background: #ffffff;
    box-shadow: 0px 0px 25px #e4eaf4 !important;
    border-radius: 20px 20px 260px 20px !important;
    padding-bottom: 3rem;

    @media screen and (max-width: 600px) {
      border-radius: 5px 5px 140px 5px !important;
    }
  }

  .company-title {
    line-height: 42px;
    color: #222d68;
    font-size: 1.2rem;
  }
  .job-title {
    line-height: 26px;
    color: #f97cb3;
    margin-bottom: 0;
  }

  .company-info,
  .job-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 250px;

    @media screen and (max-width: 960px) {
      min-height: auto;
    }
  }

  .job-info {
    margin-top: 18px;
  }

  .desc {
    font-size: 12px;
    color: #222d68;
    max-width: 72%;
  }

  .small-text {
    text-transform: capitalize;
    font-size: 13px;
    margin-bottom: 7px;
  }
  .date {
    color: #f97cb3;
    font-weight: 600;
    font-size: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(
      92.67deg,
      #f9bfda 1.07%,
      #ffcad0 51.95%,
      #fdbeba 89.88%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 20px;
    }
  }

  p {
    margin: 0;
  }
}

.education {
  .bg-card {
    background: #ffffff;
    box-shadow: 0px 0px 25px #e4eaf4 !important;
    border-radius: 20px 20px 260px 20px !important;
    padding-bottom: 3rem;

    @media screen and (max-width: 600px) {
      border-radius: 5px 5px 140px 5px !important;
    }
  }

  .company-title {
    line-height: 42px;
    color: #222d68;
    font-size: 1.2rem;
  }
  .job-title {
    line-height: 26px;
    color: #f97cb3;
    margin-bottom: 0;
  }

  .company-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 250px;
    max-width: 80%;

    @media screen and (max-width: 960px) {
      min-height: auto;
    }
  }

  .small-info {
    max-width: 70%;
  }

  .desc {
    font-size: 12px;
    color: #222d68;
    max-width: 72%;
  }
  .small-text {
    margin-right: 10px;
  }

  .small-text,
  .date,
  .university {
    color: #f97cb3;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 13px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(
      92.67deg,
      #f9bfda 1.07%,
      #ffcad0 51.95%,
      #fdbeba 89.88%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 20px;
    }
  }

  p {
    margin: 0;
  }
}
</style>

<script >
export default {
  name: 'Theme31',
  props: ['freelancer'],
  components: {},
  data() {
    return {
      activeTab: null,
      colorTab: false
    };
  }
};
</script>