<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log('Vuejs is installed!');
    return {
      message: 'Hey, this is vue!',
    };
  },
};
</script>

<style scoped>
p {
  color: green;
}
</style>
