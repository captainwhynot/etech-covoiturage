<template>
  <v-form>
    <v-row>
         <v-text-field v-model="username" outlined label="Nom d'utilisateur" 
         :rules="[rules.required]">
         
         </v-text-field>
         <!-- :rules="[()=> !!username || 'Vous devez entrer un username']" -->
    </v-row>
       
          <!--  -->
    <v-row>
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
        <span> Vous n'avez pas de compte ? </span>
    </v-row>
    <v-row>
        <span> Mot de passe oublié </span>
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
            show: false,
            username: "",
            password: "",
            rules: {
                required: value => !!value || 'Ce champ ne peut pas etre vide',
                //correctPassword: value => (value.includes("/[A-Z]/") && value.includes("/[0-9]/") && value.includes("/[#?!@$%^&*-]/") ) || 'Le mot de passe doit correspondre aux regles'
                correctPassword: value => (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[#?!@$%^&*-]/.test(value))|| 'Le mot de passe doit correspondre aux regles'
            },
        }
    },
    methods: {
        ActionConnexion() {
            console.log(this.username);
        }
    },
}
</script>

<style>

</style>