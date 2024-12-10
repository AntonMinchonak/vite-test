<template>
    <div class="app">
        <h1>COUNTER: {{ count }}</h1>
        <Button @click="increment">+</Button>
        <Button @click="count--">-</Button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

import Button from './components/Button.vue';

const count = ref(0);

const increment = () => {
    count.value += 1;
};
</script>
<style lang="scss" scoped>
.app {
}
</style>
