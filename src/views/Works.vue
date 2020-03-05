<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12" md="6" lg="6" xl="6" cols="12" pb="3">
        <v-card class="bg-card">
          <v-row>
            <v-col md="2" cols="2">
              <div class="avatar ml-2">
                <img src="@/assets/img/works-icon.png" alt="Works Icon" />
              </div>
            </v-col>

            <v-col md="3" sm="10" cols="10" class="company-info ml-auto hidden-sm-and-down">
              <h2 class="company-title">Google</h2>
              <div>
                <p class="small-text">duration:</p>
                <p class="date">Dec 19 - Present</p>
              </div>
            </v-col>

            <v-col md="7" sm="10" cols="10" class="job-info ml-auto hidden-sm-and-down">
              <p class="job-title">User interface designer</p>
              <p
                class="desc"
              >I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes.</p>
            </v-col>

            <v-col md="3" sm="10" cols="10" class="company-info ml-auto hidden-sm-and-up">
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
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Works',
  components: {}
};
</script>

<style lang="scss" scoped>
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
</style>
