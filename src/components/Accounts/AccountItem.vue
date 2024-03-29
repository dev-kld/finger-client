<template>
    <div
        class="account-item"
        :class="[
            {
                'account-item--active': props.active
            }
        ]"
    >
        <SvgIcon name="book" class="account-item__icon" />

        <div class="account-item__footer">
            <div class="account-item__name">{{ account.name }}</div>
            <div class="account-item__balance">
                {{ account.balance }}
                <span class="account-item__currency">{{ currency?.code.toUpperCase() }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import SvgIcon from '~/components/Common/SvgIcon.vue';
import { useStoreApp } from '~/stores/app';
import type { Account } from '~/types/account';

interface Props {
    active?: boolean;
    account: Account;
}

const props = defineProps<Props>();

const app = useStoreApp();

const currency = computed(() => app.base.currencies.find((c) => c.code === props.account.currencyCode));
</script>

<style lang="scss">
.account-item {
    $self: &;

    background: var(--color-background-lighter);
    padding: 12px;
    border-radius: 16px;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &__icon {
        padding: 4px;
        box-sizing: content-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: #5a40c2;
        margin-bottom: 24px;
    }

    &__name {
        font-size: 12px;
        opacity: 0.5;
        margin-bottom: 4px;
    }

    &__balance {
        font-size: 14px;
        font-weight: 700;
    }

    &__currency {
        font-weight: 400;
    }

    &:hover {
        opacity: 0.65;
    }

    &--active {
        background: var(--color-primary);

        #{$self}__icon {
            background: var(--color-white);
            fill: var(--color-primary);
        }

        &:hover {
            background: var(--color-primary);
        }
    }
}
</style>
