<template>
    <div class="accounts-grid">
        <AccountItem v-for="account in 4" :key="account" class="accounts-grid__item" />
    </div>
</template>

<script lang="ts" setup>
import AccountItem from '~/components/Accounts/AccountItem.vue';
</script>

<style lang="scss">
.accounts-grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}
</style>
