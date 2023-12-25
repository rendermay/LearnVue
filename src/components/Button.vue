<script setup>
let propsData = defineProps(['title', 'error', 'flat'])
function showPropsDate(){
    console.log();
}
</script>
<template>
    <button>普通按钮</button>
</template>
<style>
button {
    border: none;
    padding: 12px 25px;
}
</style>