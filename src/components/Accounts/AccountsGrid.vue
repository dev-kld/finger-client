<template>
    <div class="accounts-grid" :style="{ '--accounts-grid-columns': props.columns }">
        <AccountItem v-for="account in accounts" :key="account.id" :account="account" class="accounts-grid__item" />
    </div>
</template>

<script lang="ts" setup>
import AccountItem from '~/components/Accounts/AccountItem.vue';
import type { Account } from '~/types/account';

interface Props {
    columns?: number;
    accounts: Account[] | null;
}

const props = withDefaults(defineProps<Props>(), {
    columns: 2
});
</script>

<style lang="scss">
.accounts-grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(var(--accounts-grid-columns), 1fr);
    gap: 16px;
}
</style>
