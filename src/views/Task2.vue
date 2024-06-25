<template>
  <div>
    <h1>Redirecting...</h1>
    <p>Anda sedang diarahkan ke halaman proyek Tugas 2...</p>
  </div>
</template>

<script>
export default {
  name: 'Task2',
  mounted() {
    window.location.href = "https://bagas-tugas2.vercel.app/";
  },
};
</script>