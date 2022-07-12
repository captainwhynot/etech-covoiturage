<template>
  <v-form>
    <v-row>
         <v-text-field outlined label="Nom d'utilisateur" v-model="username"
         :rules="[rules.required]"></v-text-field>
    </v-row>
       
          <!--  -->
    <v-row>
        <v-text-field outlined
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : `password`"
            label="Mot de passe"
            hint="Requis: 1 chiffre, 1 caractère majuscule, longueur minimale de 8"
            class="input-group--focused"
            @click:append="show = !show"
            :rules="[rules.required, rules.correctPassword]"
        ></v-text-field>

        <v-text-field outlined
            v-model="samePassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : `password`"
            label="Confirmation mot de passe"
            class="input-group--focused"
            @click:append="show2 = !show2"
            :rules="[rules.required, rules.same]"
        ></v-text-field>
    </v-row>
    <v-spacer/>
    <v-row>
        <span> Je souhaite compléter mon profil maintenant </span>
        <v-checkbox  label="OUI" @click="this.completeProfile=!this.completeProfile">  </v-checkbox>
        
    </v-row>
    <v-row>
        <span> Pour pouvoir profiter de l'ensemble des fonctionnalités du site, votre profil doit etre complété. Vous pouvez compléter votre profil après avoir créer votre compte</span>
    </v-row>
    <v-btn @click="ActionCreer">CREER UN COMPTE</v-btn>
  </v-form>
</template>

<script>
export default {
    data() {
        return {
            completeProfile: false,
            show: false,
            show2: false,
            username: "",
            password: "",
            samePassword: "",
            rules: {
                
                required: value => !!value || 'Ce champ ne peut pas etre vide',
                correctPassword: value => (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[#?!@$%^&*-]/.test(value))|| 'Le mot de passe doit correspondre aux regles',
                same: () => this.samePassword === this.password || 'Les mots de passe entrés ne correspondent pas'
            },
        }
    },
    methods: {
        ActionCreer() {
            console.log("TEST CREATE");
        }
    },
    
}
</script>

<style>

</style>