<template>
  <div>
    <h1>Redirecting...</h1>
    <p>Anda sedang diarahkan ke halaman proyek Tugas 6...</p>
  </div>
</template>

<script>
export default {
  name: 'Task6',
  mounted() {
    window.location.href = "https://bagasnurhanindito.vercel.app/";
  },
};
</script>