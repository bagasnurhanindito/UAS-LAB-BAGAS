<template>
  <q-page class="weather-page">
    <div class="q-pa-md">
      <div class="q-gutter-md row justify-center">
        <div class="col-12 col-md-6 q-mt-xl text-center">
          <h1 class="title">SeputarCuaca</h1>
          <p class="subtitle">cek cuaca sekitar</p>
          <q-input v-model="city" label="Masukkan Nama Kota" outlined class="q-mt-md" />
          <q-btn @click="getWeather" label="GET WEATHER" color="primary" class="q-mt-md get-weather-btn" />
        </div>
        <div v-if="weather" class="col-12 col-md-6 q-mt-xl weather-info text-center">
          <h2 class="weather-city">{{ weather.name }}, {{ weather.sys.country }}</h2>
          <p>Temperature: <strong>{{ weather.main.temp }}°C</strong></p>
          <p>Weather: <strong>{{ weather.weather[0].description }}</strong></p>
          <p>Humidity: <strong>{{ weather.main.humidity }}%</strong></p>
          <p>Wind Speed: <strong>{{ weather.wind.speed }} m/s</strong></p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null,
    };
  },
  methods: {
    async getWeather() {
      const apiKey = '8a295daccf88d1b2c6ca59c9abc95958';
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        this.weather = response.data;
      } catch (error) {
        console.error(error);
        alert('Gagal mendapatkan data cuaca. Silakan coba lagi.');
      }
    },
  },
};
</script>

<style>
.weather-page {
  background: url('https://source.unsplash.com/1600x900/?weather,sky') no-repeat center center;
  background-size: cover;
  height: 100vh;
  color: #ffffff;
}

.title {
  font-size: 3em;
  font-weight: bold;
  color: #040404;
}

.subtitle {
  font-size: 1.2em;
  color: #111111;
}

.q-input input {
  color: #131313;
}

.q-input .q-field--outlined .q-field__control {
  border-color: #0b0b0b;
}

.get-weather-btn {
  background-color: #6200ea;
  color: #000000;
}

.weather-info {
  background-color: rgba(68, 53, 53, 0.7);
  padding: 20px;
  border-radius: 10px;
}

.weather-city {
  font-size: 2em;
  font-weight: bold;
}
</style>
