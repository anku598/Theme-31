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

            <v-col md="10" sm="10" cols="10" class="company-info hidden-sm-and-down">
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
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Education',
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
