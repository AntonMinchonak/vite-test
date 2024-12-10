<template>
    <div class="button">
        <slot />
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.button {
    display: flex;
    padding: 3px 8px;
    background: #dd3434;
    color: white;
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 900;
    border-radius: 10px;
    width: fit-content;
    min-width: 50px;
    align-content: center;
    justify-content: center;
}
</style>
