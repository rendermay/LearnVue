<script setup>
import { ref } from "vue";
let account = ref('')
let password = ref('')
</script>
<template>
    帐号：<input type="text" v-model="account">
    <hr>
    密码：<input type="password" v-model="password">
</template>
<style></style>