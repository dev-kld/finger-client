<template>
    <div class="create-account">
        <div class="container">
            <BaseHeader type="history">
                <template #title>Создать счет</template>
            </BaseHeader>

            <form class="create-account__form" @submit.prevent="handleSubmitForm">
                <BaseInput v-model="form.name" append-icon="book" placeholder="Название счета" class="create-account__field" />
                <BaseInput
                    v-model="form.initialBalance"
                    append-icon="money"
                    placeholder="Начальный баланс"
                    native-type="number"
                    class="create-account__field"
                />
                <BaseSelect
                    v-model="form.currencyCode"
                    append-icon="wallet"
                    :items="appStore.base.currencies"
                    title-key="name"
                    id-key="code"
                    model-key="code"
                    placeholder="Валюта счета"
                    class="create-account__field"
                />
                <!-- <BaseSelect
                    v-model="form.accountType"
                    append-icon="wallet"
                    :items="appStore.base.accountTypes"
                    title-key="name"
                    id-key="code"
                    model-key="code"
                    placeholder="Тип счета"
                    class="create-account__field"
                /> -->

                <BaseButton type="primary" native-type="submit" class="create-account__button">Создать</BaseButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseInput from '~/components/Base/BaseInput.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseSelect from '~/components/Base/BaseSelect.vue';
import { useStoreApp } from '~/stores/app';
import { useStoreAccount } from '~/stores/account';
import { reactive } from 'vue';
import type { Nullable } from '~/types/global';
import type { AccountCandidate } from '~/types/account';
import { useRouter } from 'vue-router';

const router = useRouter();
const appStore = useStoreApp();
const accountStore = useStoreAccount();

const form = reactive<Nullable<AccountCandidate>>({
    name: null,
    initialBalance: null,
    currencyCode: null
});

const handleSubmitForm = async () => {
    if (Object.values(form).every((v) => v !== null)) {
        await accountStore.createAccount(form as NonNullable<AccountCandidate>);
        router.push({ name: 'Home' });
    }
};
</script>

<style lang="scss">
.create-account {
    &__field {
        margin-bottom: 8px;
    }

    &__button {
        margin-top: 8px;
        width: 100%;
    }
}
</style>
