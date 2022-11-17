<template>
    <div class="home" :class="[{ 'home--empty': !hasAccounts }]">
        <div class="container">
            <BaseHeader type="user" />

            <template v-if="hasAccounts">
                <div class="accounts-list">
                    <div class="accounts-list__header">
                        <BaseButton type="secondary" class="accounts-list__button" @click="() => router.push({ name: 'CreateAccount' })">
                            Добавить счет
                        </BaseButton>
                    </div>

                    <AccountsGrid />
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
import BaseHeader from '~/components/Base/BaseHeader.vue';
import AccountsGrid from '~/components/Accounts/AccountsGrid.vue';

const router = useRouter();

const hasAccounts = true;
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
