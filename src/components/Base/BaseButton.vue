<template>
    <button
        class="button"
        :type="props.nativeType"
        :class="[
            `button--${props.type}`,
            `button--${props.size}`,
            {
                'button--expanded': props.expanded
            }
        ]"
        :disabled="props.loading"
    >
        <img v-if="props.loading" src="/spinner.svg" class="button__spinner" />
        <slot v-else />
    </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';
import type { Size } from '~/types/global';

interface Props {
    type: 'primary' | 'secondary';
    expanded?: boolean;
    nativeType?: ButtonHTMLAttributes['type'];
    loading?: boolean;
    size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
    nativeType: 'button',
    size: 'medium'
});
</script>

<style lang="scss">
.button {
    height: 40px;
    padding: 0 16px;
    border-radius: var(--app-base-element-border-radius);
    font-size: 13px;
    transition: background 0.2s ease-in-out;

    &__spinner {
        height: 100%;
        padding: 8px;
    }

    &--primary {
        background: var(--color-primary);
        color: var(--color-white);

        &:hover {
            background: var(--color-primary-darker);
        }
    }

    &--secondary {
        background: var(--color-background-lighter);
        color: var(--color-white);
        border: 1px solid var(--color-background-lighter);

        &:hover {
            background: var(--color-background);
        }
    }

    &--expanded {
        width: 100%;
    }

    &--medium {
        height: 40px;
    }

    &--small {
        height: 32px;
    }
}
</style>
