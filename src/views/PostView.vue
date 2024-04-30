<template>
    <div class="form-container">
      <h2>Créer un nouveau post</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Titre:</label>
          <input type="text" id="title" v-model="formData.title" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="formData.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input type="file" id="image" @change="onFileChange">
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        formData: {
          title: '',
          description: '',
          image: null
        }
      };
    },
    methods: {
      onFileChange(event) {
        this.formData.image = event.target.files[0];
      },
      submitForm() {
        let formData = new FormData();
        formData.append('title', this.formData.title);
        formData.append('description', this.formData.description);
        formData.append('image', this.formData.image);
  
        axios.post('/posts', formData)
          .then(response => {
            console.log(response.data);
            this.resetForm();
          })
          .catch(error => {
            console.error(error);
          });
      },
      resetForm() {
        this.formData.title = '';
        this.formData.description = '';
        this.formData.image = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-container h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-container form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .form-group input[type="file"] {
    cursor: pointer;
  }
  
  button[type="submit"] {
    padding: 12px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
  
  .success-message {
    color: green;
    font-size: 14px;
    margin-top: 5px;
  }
  </style>
  