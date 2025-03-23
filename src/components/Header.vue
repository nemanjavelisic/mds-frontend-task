<template>
  <nav class="header">
    <div class="header-logo">MDS Frontend Task</div>
    <div class="header-name">Nemanja Velišić</div>
    <ul class="header-links">
      <li>
        <router-link to="/" class="header-link" active-class="active-link">
          Todo App
        </router-link>
      </li>
      <li>
        <router-link
          to="/kanban"
          class="header-link"
          active-class="active-link"
        >
          Kanban Board
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4caf50;
  padding: 10px 20px;
  color: white;
}

.header-logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.header-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.header-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background 0.3s;
}

.header-link:hover {
  text-decoration: underline;
}

.active-link {
  background-color: #388e3c;
  font-weight: bold;
}
</style>
