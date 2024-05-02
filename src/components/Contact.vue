<script setup>


const formData = {
  name: '',
  email: '',
  message: ''
};

const submitForm = () => {
  // Ajoutez ici la logique pour envoyer le formulaire
  console.log(formData);
  // Réinitialisez le formulaire après soumission
  formData.name = '';
  formData.email = '';
  formData.message = '';
};
</script>

<template>
  <div class="container py-5" id="contact">
    <h2 class="mb-4">Contactez-moi</h2>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" v-model="formData.message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
      <div class="col-md-6">
        <p class="mb-4">Vous pouvez également me contacter via mes profils LinkedIn, GitHub ou par e-mail :</p>
        <ul class="list-unstyled d-flex align-items-center w-100">
          <li><a class="social-network-link me-3" href="https://www.linkedin.com/in/mathis-gerboud/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a class="social-network-link me-3" href="https://github.com/mathisgd7" target="_blank"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="mailto:mathis.gerboud@gmail.com" class="email me-3"><i class="fa-solid fa-envelope"></i> mathis.gerboud@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .social-network-link {
    font-size: 3rem;
    color: var(--text-custom-color);
    padding-right: 24px;
  }

  .social-network-link:hover {
    color: var(--bg-custom-color);
    transition: all 0.25s ease-out;
  }

  .email {
    font-size: 1.25rem;
    color: var(--text-custom-color);
  }
</style>