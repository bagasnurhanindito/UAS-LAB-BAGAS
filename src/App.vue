<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img src="https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png" alt="SyncCuaca" class="logo">
          SeputarCuaca
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="drawer = !drawer" class="menu-btn"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay class="bg-secondary text-white">
      <q-list>
        <q-item clickable v-ripple @click="goToTask('')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task1')">
          <q-item-section>Tugas 1</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task2')">
          <q-item-section>Tugas 2</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task3')">
          <q-item-section>Tugas 3</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task4')">
          <q-item-section>Tugas 4</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task5')">
          <q-item-section>Tugas 5</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToTask('task6')">
          <q-item-section>Tugas 6</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white text-center q-pa-md">
      © 2024 Bagas Nur Hanindito, SeputarCuaca
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    goToTask(task) {
      this.$router.push(`/${task}`);
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.q-header {
  background-color: #3f51b5 !important;
  color: white;
}

.q-footer {
  background-color: #3f51b5 !important;
  color: white;
}

.logo {
  height: 30px;
  margin-right: 10px;
}

.menu-btn {
  margin-left: auto;
}

.q-drawer {
  background-color: #673ab7;
  color: white;
}

.q-list .q-item {
  color: white;
}

.q-item:hover {
  background-color: #512da8;
}

.q-item-section {
  font-size: 18px;
  font-weight: 500;
}

.q-page-container {
  background-color: #e8eaf6;
  padding: 20px;
}
</style>
