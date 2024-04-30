<template>
  <div>
    <h1>Liste des articles</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div class="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <img :src="getImageUrl(post.image)" alt="Post Image">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('/index');
        this.posts = response.data;
        console.error(this.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    getImageUrl(filename) {
      // Assurez-vous d'ajuster le chemin de l'URL en fonction de votre configuration serveur
      return `https://mannoffgod.000webhostapp.com/storage/images/${filename}`;
    },
  }
};
</script>

<style scoped>
/* Style de la liste des articles */
ul {
  list-style: none;
  padding: 0;
}

.post {
  margin-bottom: 30px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #444;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
  color: #666;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
