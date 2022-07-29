<template>
    <div class="everything">
       <h1 class="d-flex justify-center mb-4"> Bienvenue, où désirez vous voyager ?</h1>
       <BarreRecherche></BarreRecherche>

      
            <h1 class="text"> A propos de ETECH-COVOITURAGE </h1>
            <div class="text d-flex flex-row">
                <span > Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte.  </span>
                <v-img  src="../image/imgAccueil1.jpg" height="300" width="300"></v-img>
            </div> 
            
            <div class="d-block red justify-center" >
                <span class="d-flex justify-center"> Vous n'avez pas encore de compte ? <br/> Creer un compte etech covoiturage n'engage à rien et blalabal</span>
                <v-btn class="bouton d-flex justify-center"> CREER UN COMPTE </v-btn>
            </div>
            
            
            <div class="text d-flex flex-row">
                <v-img  src="../image/imgAccueil2.jpg" height="300" width="300"></v-img>
                <span > Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte. Insérer du texte.  </span>
            </div> 
            <h1 class="text"> Nous contacter </h1>

            <div class="text">
                <span class=""> Instagram <v-icon>mdi-instagram</v-icon>  </span>
                <span class=""> Facebook <v-icon>mdi-facebook</v-icon>  </span>
                <span class=""> Twitter <v-icon>mdi-twitter</v-icon>  </span>
                <span class=""> Instagram <v-icon>mdi-instagram</v-icon>  </span>
                <span class=""> Téléphone <v-icon>mdi-phone</v-icon>  </span>
                <span class=""> Mail <v-icon>mdi-email</v-icon>  </span>
            </div>
            
        
    </div>
    
</template>

<script>
import BarreRecherche from './BarreRecherche'
export default {
    components: { BarreRecherche },
}
</script>

<style lang="scss">

.everything{
    margin-top: 50px;
}

.bouton{
    margin-left: 50%;
}
.text{
    margin-left: 20%;
    margin-right: 20%;

    
}
</style>