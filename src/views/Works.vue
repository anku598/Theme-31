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
</style>
