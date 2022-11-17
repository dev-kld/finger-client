<template>
    <div class="create-account">
        <div class="container">
            <BaseHeader type="history">
                <template #title>Создать счет</template>
            </BaseHeader>

            <form class="create-account__form">
                <BaseInput append-icon="book" placeholder="Название счета" class="create-account__field" />
                <BaseInput append-icon="money" placeholder="Начальный баланс" type="number" class="create-account__field" />
                <BaseInput append-icon="globe" placeholder="Валюта счета" class="create-account__field" />
                <BaseInput append-icon="wallet" placeholder="Тип счета" class="create-account__field" />
                <BaseSelect append-icon="wallet" :items="selectItems" placeholder="Выберите что-нибудь" />

                <BaseButton type="primary" class="create-account__button">Создать</BaseButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SelectItem } from '~/components/Base/BaseSelect.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseSelect from '~/components/Base/BaseSelect.vue';

const selectItems: SelectItem[] = [
    { title: 'Книги', value: 'books', icon: 'book' },
    { title: 'Учебники', value: 'textbook', icon: 'money' },
    { title: 'Ручки', value: 'pens', icon: 'book' },
    { title: 'Деньги', value: 'money', icon: 'money' }
];
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
