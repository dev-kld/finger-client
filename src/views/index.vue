<template>
    <div class="home" :class="[{ 'home--empty': !accountStore.accounts }]">
        <div class="container">
            <template v-if="accountStore.accounts">
                <BaseHeader v-if="!breakpoints.tablet.value" type="user" />

                <div class="accounts-list">
                    <div class="accounts-list__header">
                        <BaseButton type="secondary" size="small" class="accounts-list__button" @click="handleAddAccount">
                            Создать счет
                        </BaseButton>
                    </div>

                    <AccountsGrid :columns="accountsGridColumns">
                        <AccountItem
                            v-for="account in accountStore.accounts"
                            :key="account._id"
                            :account="account"
                            @click="() => router.push({ name: 'AccountDetails', params: { id: account._id } })"
                        />
                    </AccountsGrid>
                </div>
            </template>

            <template v-else>
                <div class="home-empty">
                    <div class="home-empty__title">На вашем аккаунте пока нет счетов</div>
                    <BaseButton type="primary" class="home-empty__button" @click="() => router.push({ name: 'CreateAccount' })">
                        Создать счет
                    </BaseButton>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BaseButton from '~/components/Base/BaseButton.vue';
import AccountsGrid from '~/components/Accounts/AccountsGrid.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import { useBreakpoints } from '@vueuse/core';
import { BREAKPOINTS } from '~/helpers/constants';
import { computed } from 'vue';
import { useStoreAccount } from '~/stores/account';
import AccountItem from '~/components/Accounts/AccountItem.vue';

const accountStore = useStoreAccount();
const router = useRouter();

accountStore.fetchAccounts();

const breakpoints = useBreakpoints(BREAKPOINTS);
const accountsGridColumns = computed(() => {
    if (breakpoints.tablet.value) {
        return 4;
    }

    return 2;
});

const handleAddAccount = () => {
    // if (breakpoints.tablet.value) {
    //     return;
    // }

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
    &-empty {
        text-align: center;
        font-weight: 700;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        transform: translate(-50%, -50%);

        &__button {
            margin-top: 16px;
        }
    }
}
</style>
