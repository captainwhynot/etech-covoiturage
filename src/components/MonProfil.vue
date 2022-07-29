<template>
<div class="marge">
    <v-card class="mt-6">
      <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="text-h5">
                            DUJARDIN JEAN
                            </v-card-title>
                                
                            <v-card-subtitle v-if="profilCertifie" class="text-h6">  PROFIL CERTIFIÉ  <v-icon class="mb-1"> mdi-shield-check</v-icon> </v-card-subtitle> 
                            <v-card-subtitle v-if="!profilCertifie" class="text-h6">  PROFIL A CERTIFIER <v-icon class="mb-1"> mdi-shield-off</v-icon> </v-card-subtitle> 
                        </div>                
                    </div>
    </v-card>
    
   
    <v-row justify="space-around" class="d-flex mt-8">
            
      <v-btn  width="450" color="primary" depressed @click="printInfos = true"> VOS INFORMATIONS </v-btn>
      <v-btn  width="450" color="primary" depressed @click="printInfos = false"> PARAMETRES COMPTE </v-btn>
    </v-row>
  <br/><br/><br/>  
<div v-if="printInfos">
  <v-form>
    <h1>Mes informations personnelles</h1>
    <br/>
    <v-row class="mb-4">
      <span v-if="!bioComplete"> <v-icon class="mb-1">mdi-plus-circle-outline</v-icon> Ajoutez une description à votre compte </span>
      <span v-if="bioComplete"> <v-icon class="mb-1">mdi-check-circle</v-icon> Modifier la description </span>
    </v-row>
    
    <v-row>
      <span> Nom : </span> <span v-if="!modif"> DUJARDIN </span> <v-text-field v-if="modif" label="DUJARDIN"></v-text-field>
    </v-row>
    <v-row>
      <span> Prénom : </span> <span v-if="!modif"> JEAN </span> <v-text-field v-if="modif" label="JEAN"></v-text-field>
    </v-row>
    <v-row>
      <span> Date de naissance : </span> <span v-if="!modif"> 25/08/1976 </span> <v-text-field v-if="modif" label="25/08/1976"></v-text-field>
    </v-row>
    <v-row>
      <span> Numéro de téléphone : </span> <span v-if="!modif"> +3325539685 </span> <v-text-field v-if="modif" label="+3325539685"></v-text-field>
    </v-row>
    <v-row>
      <span> E-mail : </span> <span v-if="!modif"> adressemail@gmail.com </span> <v-text-field class="" v-if="modif" label="adressemail@gmail.com"></v-text-field>
    </v-row>
    <v-row>
      <v-btn v-if="!modif" @click="modif=!modif"> Modifier mes informations </v-btn> <v-btn v-if="modif" @click="modif=!modif"> Valider modifications </v-btn>
    </v-row>
  </v-form>
  <br/><br/><br/>
  <div>
    <h1> Certifier son profil</h1>
    <span v-if="!idVerifie"><v-icon class="mb-1">mdi-plus-circle-outline</v-icon> Vérification d'identité </span>
    <span v-if="idVerifie"><v-icon class="mb-1">mdi-check-circle</v-icon> Identité vérifiée </span>
    <br/>
   
    <span v-if="!mailVerifie"> <v-icon class="mb-1">mdi-plus-circle-outline</v-icon> Validation adresse mail : adressemail@gmail.com </span>
    <span v-if="mailVerifie"> <v-icon class="mb-1">mdi-check-circle</v-icon> Adresse mail validée : adressemail@gmail.com </span>
    <br/>
    
    <span v-if="telVerifie"> <v-icon class="mb-1">mdi-check-circle</v-icon> Numéro de téléphone vérifié : +3325539685 </span>
    <span v-if="!telVerifie"> <v-icon class="mb-1">mdi-plus-circle-outline</v-icon> Vérification numéro de téléphone : +3325539685 </span>
    <br/>
</div>   
   
   <div>
    <h1> Mes véhicules</h1>
    <span><v-icon class="mb-1">mdi-plus-circle-outline</v-icon> Ajouter un véhicule </span>
    <br/>
    <v-card>
      <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="text-h5">
                            TESLA MODEL X
                            </v-card-title>
                                
                            <v-card-subtitle class="text-h6">  ROSE CLAIR </v-card-subtitle>  
                        </div>                
                    </div>
    </v-card>
   
    
     
  </div>
     
  </div>
  <br/><br/><br/>
  
  <div v-if="!printInfos">
    <span> Modifier mon mot de passe </span>
    <br/>
    <span> Mes avis donnés </span>
    <br/>
    <span> Mes avis reçus </span>
    <br/>
    <span> Préférences de notifications </span>
    <br/>
    <span> Se déconnecter </span>
    <br/>
    <span> Supprimer mon compte </span>
    <br/>
  </div>


  
    
    
 </div>
</template>

<script>
export default {
data() {
  return {
    bioCOmplete: true,
    profilCertifie: false,
    idVerifie: true,
    mailVerifie: true,
    telVerifie: true,
    modif: false,
    printInfos: Boolean
  }
},
}
</script>

<style>
.marge{
  margin-left: 20%;
  margin-right: 20%;
}
</style>