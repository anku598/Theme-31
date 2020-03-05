<template>
  <v-app class="app-bg">
    <CvHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import CvHeader from '@/components/CvHeader';
export default {
  name: 'App',

  components: {
    CvHeader
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import url('./assets/scss/style.scss');

.app-bg {
  background: #e5e5e5 !important;
}
</style>
