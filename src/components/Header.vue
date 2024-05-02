<template>
  <header class="portfolio-header">
    <div class="container">
      <h1 class="display-4 text-center mb-4 animated fadeInDown title">Mathis GERBOUD - Développeur web</h1>
      <nav class="navbar navbar-expand-xl navbar-dark flex-column align-items-center justify-content-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link nav-active" href="#accueil">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projets">Projets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>

.portfolio-header {
  background-color: var(--bg-custom-color);
  padding-top: 80px;
  padding-bottom: 50px;
}

.title {
  color: var(--text-custom-color);
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.navbar-toggler {
  border: none;
}

.nav-link {
  font-size: 1.2rem;
  padding: 0;
  font-weight: 500;
  margin: 0 20px 0 20px;
  transition: color 0.3s ease;
}

.nav-active {
  border-bottom: 2px solid var(--text-custom-color);
}

.nav-link:hover {
  color: #17a2b8;
}

.navbar-dark .navbar-nav .nav-link {
  color: var(--text-custom-color);
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #6c757d;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.fadeInDown {
  animation-name: fadeInDown;
}
</style>
<script setup>
</script>