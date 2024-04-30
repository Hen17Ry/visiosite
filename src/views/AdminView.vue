<!-- Template Vue (VotreComponent.vue) -->
<template>
  <div class="container">
    <h1>Vos Données</h1>
    <div v-if="loading">Chargement en cours...</div>
    <div v-else>
      <div class="data-item" v-for="data in datas" :key="data.id">
        <!-- Affichez les données de chaque élément ici -->
        <h3>{{ data.nom }}</h3>
        <h3>{{ data.prenom }}</h3>
        <h3>{{ data.tel }}</h3>
        <h3>{{ data.email }}</h3>
        <h3>{{ data.date }}</h3>
        <h3>{{ data.heure }}</h3>
        <h3>{{ data.sujet }}</h3>
        <!-- Vous pouvez ajouter d'autres champs ici -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      datas: [],
      loading: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('/get'); // Modifiez l'URL selon votre route API
        this.datas = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.data-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.data-item h3 {
  margin-top: 0;
}

.data-item p {
  margin-bottom: 0;
}
</style>
