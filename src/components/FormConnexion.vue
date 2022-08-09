<!-- Component pour le formulaire de création, une partie des exceptions d'entrées a été réalisée -->
<template>
  <v-form class="mt-16">
    <v-row>
         <v-text-field v-model="username" outlined label="Nom d'utilisateur" 
         :rules="[rules.required]">
         
         </v-text-field>
    </v-row>
       
    <v-row>
        <!-- show permet de gerer l'affichage ou non des caracteres du textfield -->
        <v-text-field outlined
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : `password`"
            label="Mot de passe"
            class="input-group--focused"
            @click:append="show = !show"
            :rules="[rules.required, rules.correctPassword]"
        ></v-text-field>
    </v-row>
    <v-row>
        <a href="/CreateCompteView"> Vous n'avez pas de compte ? </a>
    </v-row>
    <v-row>
        <a href="/PasswordOublieView"> Mot de passe oublié </a>
    </v-row>
    <v-row>
        <span class="text--red"> MESSAGE D'ERREUR A PERSONNALISER</span>
    </v-row>
    <v-row>
        <v-btn @click="ActionConnexion">SE CONNECTER</v-btn>
    </v-row>
    
  </v-form>
</template>

<script>
export default {
    data() {
        return {

            show: false, //montrer ou non le champ password
            //vars pour les vmodels des champs du formulaire
            username: "",
            password: "",
            //les regles pour les entrées des champs
            rules: {
                required: value => !!value || 'Ce champ ne peut pas etre vide', //le champ doit etre rempli pour etre validé
                correctPassword: value => (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[#?!@$%^&*-]/.test(value))|| 'Le mot de passe doit correspondre aux regles'
                //le mdp doit avoir au moins 1 maj, 1 chiffre, et 1 caractere spécial pour etre validé
            },
        }
    },
    methods: {
        //action du bouton connexion
        ActionConnexion() {
            console.log("LES VARS : \n"
            +"username: "+this.username+"\n"
            +"password: "+this.password+"\n");
        }
    },
}
</script>

<style>

</style>