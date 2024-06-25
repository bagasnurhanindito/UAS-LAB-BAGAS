<template>
  <div>
    <h1>Redirecting...</h1>
    <p>Anda sedang diarahkan ke halaman proyek Tugas 5...</p>
  </div>
</template>

<script>
export default {
  name: 'Task5',
  mounted() {
    window.location.href = "https://bagasnurhanindito-pbk.vercel.app/";
  },
};
</script>