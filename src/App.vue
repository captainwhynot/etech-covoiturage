<template>
  <v-app>
    <v-main>
      <HeaderComp></HeaderComp>
      <!-- <ChangePassword></ChangePassword>
      <PasswordOublie></PasswordOublie> -->
      <!-- <MesCovoiturages></MesCovoiturages> -->
      <!-- <DetailsCovoiturage></DetailsCovoiturage> -->
      <!-- <AccueilComp></AccueilComp> -->
      <!-- <MonProfil></MonProfil> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComp from './components/HeaderComp';
//import ChangePassword from './components/ChangePassword'
//import PasswordOublie from './views/PasswordOublie';
// import DetailsCovoiturage from './components/DetailsCovoiturage';
// import MesCovoiturages from './components/MesCovoiturages';
// import MonProfil from './components/MonProfil';
// import DetailsCovoiturage from './components/DetailsCovoiturage.vue';
//  import AccueilComp from './components/AccueilComp';

// import TestAPI from './components/TestAPI';
// import FormTrajet from './components/FormTrajet';
// import FormConnexion from './components/FormConnexion'
// import FormCreation from './components/FormCreation'
export default {
  name: 'App',
  components: { HeaderComp},
  
  
};
</script>

<style lang="scss">
.v-form{
  margin-left: 20%;
  margin-right: 20%;
}

</style>
