<template>
    <div class="create-account">
        <div class="container">
            <BaseHeader type="history">
                <template #title>Создать счет</template>
            </BaseHeader>

            <pre>{{ form }}</pre>

            <form class="create-account__form">
                <BaseInput v-model="form.name" append-icon="book" placeholder="Название счета" class="create-account__field" />
                <BaseInput
                    v-model="form.balance"
                    append-icon="money"
                    placeholder="Начальный баланс"
                    native-type="number"
                    class="create-account__field"
                />
                <BaseSelect
                    v-model="form.currency"
                    append-icon="wallet"
                    :items="currencies"
                    placeholder="Валюта счета"
                    class="create-account__field"
                />
                <BaseSelect
                    v-model="form.accountType"
                    append-icon="wallet"
                    :items="accountTypes"
                    placeholder="Тип счета"
                    class="create-account__field"
                />

                <BaseButton type="primary" class="create-account__button">Создать</BaseButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseInput from '~/components/Base/BaseInput.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseSelect from '~/components/Base/BaseSelect.vue';
import { computed, reactive } from 'vue';
import { useStoreApp } from '~/stores/app';

const appStore = useStoreApp();

const form = reactive({
    name: '',
    balance: 0,
    accountType: 0,
    currency: 0
});

const accountTypes = computed(() =>
    appStore.settings.accountTypes.map((item) => ({
        ...item,
        title: item.name,
        value: item.code
    }))
);

const currencies = computed(() => {
    return appStore.settings.currency.map((item) => ({
        ...item,
        title: item.name,
        value: item.code
    }));
});
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
