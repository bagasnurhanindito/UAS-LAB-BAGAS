<template>
  <div>
    <h1>Redirecting...</h1>
    <p>Anda sedang diarahkan ke halaman proyek Tugas 4...</p>
  </div>
</template>

<script>
export default {
  name: 'Task4',
  mounted() {
    window.location.href = "https://bagas-223510443.vercel.app/";
  },
};
</script>