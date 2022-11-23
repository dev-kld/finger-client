<template>
    <div class="home" :class="[{ 'home--empty': !appStore.accounts }]">
        <div class="container">
            <template v-if="appStore.accounts">
                <BaseHeader type="user">
                    <template #prepend>
                        <BaseButton type="secondary" size="small" @click="() => user.logout()">Выйти из аккаунта</BaseButton>
                    </template>
                </BaseHeader>

                <div class="accounts-list">
                    <div class="accounts-list__header">
                        <BaseButton type="secondary" class="accounts-list__button" @click="handleAddAccount"> Добавить счет </BaseButton>
                    </div>

                    <AccountsGrid :accounts="appStore.accounts" :columns="accountsGridColumns" />
                </div>
            </template>

            <template v-else>
                <div class="home__title">На вашем аккаунте пока нет счетов</div>
                <BaseButton type="primary" class="home__button" @click="() => router.push({ name: 'CreateAccount' })">
                    Добавить счет
                </BaseButton>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BaseButton from '~/components/Base/BaseButton.vue';
import AccountsGrid from '~/components/Accounts/AccountsGrid.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import { useUser } from '~/composables/user';
import { useBreakpoints } from '@vueuse/core';
import { BREAKPOINTS } from '~/helpers/constants';
import { computed } from 'vue';
import { useStoreAccount } from '~/stores/account';

const appStore = useStoreAccount();
const router = useRouter();
const user = useUser();

appStore.fetchAccounts();

const breakpoints = useBreakpoints(BREAKPOINTS);
const accountsGridColumns = computed(() => {
    if (breakpoints.tablet.value) {
        return 4;
    }

    return 2;
});

const handleAddAccount = () => {
    if (breakpoints.tablet.value) {
        console.log('hello');
        return;
    }

    router.push({ name: 'CreateAccount' });
};
</script>

<style lang="scss">
.accounts-list {
    &__header {
        display: flex;
        justify-content: flex-end;
    }
}

.home {
    $self: &;

    &--empty {
        text-align: center;
        font-weight: 700;

        #{$self}__button {
            margin-top: 16px;
        }
    }
}
</style>
