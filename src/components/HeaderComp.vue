<template>
  <nav >   
    <v-toolbar outlined app color="grey lighten-2">
      <v-app-bar-nav-icon v-if="connected" class="mr-10" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <router-link to="/"><v-img src="../image/imgLogo.png" max-height="50" max-width="50"></v-img></router-link>
        <v-toolbar-title> 
            <span class=" subheading font-weight-light">ETECH</span>
            <br/>
            <span class="headline font-weight-dark">COVOITURAGE</span>  
        </v-toolbar-title>
    <v-spacer/>
    <div class="liens">
        <ul>
            <li v-if="connected"><a href="/CreateTrajetView" class="black--text text--lighten-2 headline font-weight-dark">CREER TRAJET</a></li>
            <li v-if="!connected"><a href="/ConnexionView" class="black--text text--lighten-2 headline font-weight-dark">CREER TRAJET</a></li>
            <li ><a href="/CovoiturageRechercheView" class="black--text text--lighten-2 headline font-weight-dark">RECHERCHER TRAJET</a></li>
            <li><a href="/ConnexionView" class="black--text text--lighten-2 headline font-weight-dark">CONNEXION</a></li>
            <li><a href="/CreateCompteView" class="black--text text--lighten-2 headline font-weight-dark">CREER COMPTE</a></li>
        </ul>
    </div>
    </v-toolbar>

    <v-navigation-drawer v-if="connected" app v-model="drawer" class="indigo lighten-3">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100"> <img src="../image/imgAvatar.png"/> </v-avatar>
        </v-flex>
      </v-layout>
      <v-list dense>
        <v-subheader>Mon compte</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item router :to="routerMonProfil">
            <v-list-item-icon >
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >Mon profil</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item router :to="routerMesCovoiturages">
            <v-list-item-icon>
              <v-icon>mdi-car-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >Covoiturages</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-forum</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Messages</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-currency-eur</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-close-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Se Deconnecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- <v-btn @click="ActionCreer" :to="routerInscription">CREER UN COMPTE</v-btn>
      <v-btn @click="ActionConnexion" :to="routerConnexion">SE CONNECTER</v-btn> -->

    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      routerConnexion: "/ConnexionView",
      routerInscription: "/CreateCompteView",
      routerFormTrajet: "/CreateTrajetView",
      routerMesCovoiturages: "/MesCovoituragesView",
      routerMonProfil: "/MonProfilView",
      routerAccueil: "/",
      connected: true

    }
  },
  methods: {
    ActionConnexion() {
      console.log("TEST CONNEXION")
    },
    ActionCreer() {
      console.log("TEST CREER")
    }
  },
}
</script>


<style lang="scss">
.liens{
    margin-left: 100px;
    
    ul { 
        list-style: none; 
        display: table;
        text-align: center;
       
    }
    li { 
        display: table-cell; 
        position: relative; 
        padding: 15px 0;
        }
    a { 
        
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
  
        display: inline-block;
        padding: 15px 20px;
        position: relative;
        }

    a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: rgb(0, 0, 0);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        }
    a:hover:after { 
        width: 100%; 
        left: 0; 
        }
    @media screen and (max-height: 300px) {
	ul {
	margin-top: 40px;
	}
    }  
}
</style>
