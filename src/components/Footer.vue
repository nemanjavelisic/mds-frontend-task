<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; 2025 Nemanja Velišić. All rights reserved.</span>
      <span
        >Email:
        <a href="mailto:velisic98@gmail.com">velisic98@gmail.com</a></span
      >
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
}

.footer-content a {
  color: #4caf50;
  text-decoration: none;
}

.footer-content a:hover {
  text-decoration: underline;
}
</style>
