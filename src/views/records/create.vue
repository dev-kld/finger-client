<template>
    <div class="create-record">
        <div class="container">
            <BaseHeader type="history">
                <template #title>Добавить запись</template>
            </BaseHeader>

            <pre>{{ form }}</pre>

            <BaseInput v-model="form.sum" native-type="number" placeholder="Введите сумму" />
            <BaseInput
                :initial-value="selectedAccount?.currencyCode"
                disabled
                placeholder="Валюта (определяется автоматически при выборе счета)"
            />

            <AccountsGrid :columns="4">
                <AccountItem
                    v-for="account in accountStore.accounts"
                    :key="account._id"
                    :account="account"
                    :active="account._id === form.accountId"
                    @click="() => (form.accountId = account._id)"
                />
            </AccountsGrid>

            <BaseButton type="primary">Добавить запись</BaseButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import AccountItem from '~/components/Accounts/AccountItem.vue';
import AccountsGrid from '~/components/Accounts/AccountsGrid.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import { useStoreAccount } from '~/stores/account';

const accountStore = useStoreAccount();

const form = reactive({
    sum: 0,
    accountId: ''
});

const selectedAccount = computed(() => accountStore.getAccountById(form.accountId));

accountStore.fetchAccounts();
</script>
