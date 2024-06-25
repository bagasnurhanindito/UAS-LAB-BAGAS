<template>
  <div>
    <h1>Redirecting...</h1>
    <p>Anda sedang diarahkan ke halaman proyek Tugas 1...</p>
  </div>
</template>

<script>
export default {
  name: 'Task1',
  mounted() {
    window.location.href = "https://bagas-portfolio-xi.vercel.app/";
  },
};
</script>
