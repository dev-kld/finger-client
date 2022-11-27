<template>
    <div class="toast" :class="[`toast--${props.notification.type}`]" @click="appStore.deleteNotification(props.notification.id)">
        <div class="toast__wrapper">
            <div class="toast__content">
                <slot></slot>
            </div>

            <SvgIcon name="close" class="toast__close" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '~/components/Common/SvgIcon.vue';
import { useStoreApp } from '~/stores/app';

export interface Notification {
    id: string;
    type: 'success' | 'error';
    code?: number;
    message?: string;
}

interface Props {
    notification: Notification;
}

const props = defineProps<Props>();

const appStore = useStoreApp();
</script>

<style lang="scss">
.toast {
    $self: &;

    padding: 8px 16px;
    font-size: 12px;
    border-radius: 16px;
    display: inline-block;
    margin: 0 auto;

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__close {
        width: 12px;
        height: 12px;
        margin-left: 8px;
    }

    &--error {
        background: rgba(var(--color-danger-rgb), 0.1);
        color: var(--color-danger);

        #{$self}__close {
            fill: var(--color-danger);
        }
    }
}
</style>
