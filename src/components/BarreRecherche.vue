<template>
  <v-form>
            <v-row>
                <v-autocomplete outlined prepend-inner-icon="mdi-map-marker" label="Ville de départ" :items="villes"/>
                <v-autocomplete outlined prepend-inner-icon="mdi-map-marker" label="Ville d'arrivée" :items="villes"/>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }" >
                    <v-text-field
                        v-model="date"
                        label="Date de départ"
                        outlined
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        prepend-inner-icon="mdi-calendar"

                    ></v-text-field>
                    </template>
                    <v-date-picker
                    locale="fr"
                    v-model="date"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                        >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                        >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu> 
                <v-select prepend-inner-icon="mdi-account" :items="items" label="Nombre places max" outlined></v-select>
            </v-row>
        </v-form>
</template>

<script>
export default {
    data() {
        return {
            villes: ["Ville1","Ville2","Ville3","Ville4"],
            items: [1,2,3,4,5,6,7,8],
        }
    },
}
</script>

<style>

</style>