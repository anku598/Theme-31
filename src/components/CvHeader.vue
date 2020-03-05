<template>
  <v-container fluid>
    <v-row class="mb-6" justify="space-between" wrap>
      <v-col lg="6">
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
                  <h2>Beverly Andrews</h2>
                  <p>User interface designer</p>
                </div>

                <div class="resume" depressed>
                  <v-btn fab>
                    <v-icon>mdi-email</v-icon>
                  </v-btn>

                  <v-btn fab>
                    pdf
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </div>
              </v-col>

              <v-col lg="4">
                <v-btn fab>
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
                <v-btn fab>
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
                <v-btn fab>
                  <v-icon>mdi-google-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <v-col lg="4" class="d-flex justify-end">
        <v-btn fab>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn fab>
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn fab>
          <v-icon>mdi-google-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-tabs grow background-color="transparent " v-model="tab">
      <v-tab
        :to="{path:item.routePath}"
        class="tab-bg mr-8"
        v-for="(item,idx) in items"
        :key="'sc' + idx"
      >{{item.name}}</v-tab>
    </v-tabs>
  </v-container>
</template>
<script>
export default {
  name: 'CvHeader',

  data() {
    return {
      tab: null,
      items: [
        {
          name: 'About',
          routePath: '/'
        },
        {
          name: 'potfolio',
          routePath: '/portfolio'
        },
        {
          name: 'works',
          routePath: '/works'
        },
        {
          name: 'education',
          routePath: '/education'
        },
        {
          name: 'skills',
          routePath: '/skills'
        }
      ]
    };
  }
};
</script>


<style lang="scss">
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

.tab-bg {
  background: linear-gradient(
    99.48deg,
    #f9bfda 1.07%,
    #ffcad0 51.95%,
    #fdbeba 89.88%
  );
  border-radius: 5px 5px 60px 5px;
  color: #222d68 !important;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
}

.v-tabs-slider {
  display: none !important;
}
</style>