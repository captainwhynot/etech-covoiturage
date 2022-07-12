<template>
  <v-app>
    <v-main>
      <HeaderComp></HeaderComp>
      
      
      
      
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComp from './components/HeaderComp';
// import FormTrajet from './components/FormTrajet';
// import FormConnexion from './components/FormConnexion'
// import FormCreation from './components/FormCreation'
export default {
  name: 'App',
  components: { HeaderComp/*, FormTrajet, FormConnexion, FormCreation*/ },
  
  
};
</script>

<style lang="scss">
.v-form{
  margin-left: 20%;
  margin-right: 20%;
}

</style>
