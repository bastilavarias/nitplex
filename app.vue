<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="bg-gray-900 p-4">
      <div class="container mx-auto flex justify-between">
        <h1 class="text-red-600 text-2xl font-bold">Nitplex</h1>
        <ul class="flex space-x-4 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Anime</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-screen flex items-center justify-center" style="background-image: url('https://via.placeholder.com/1600x600');">
      <div class="text-center">
        <h2 class="text-5xl font-bold text-white mb-4">Welcome to Nitplex</h2>
        <p class="text-lg text-gray-300 mb-8">Your favorite movies and anime, all in one place.</p>
        <a href="#" class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Start Watching</a>
      </div>
    </section>

    <!-- Footer -->

    <footer class="bg-gray-800 text-white p-4 text-center">
      &copy; 2024 Nitplex. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// No specific setup for this single-page component.
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
</style>