<template>
    <button
        class="button"
        :type="props.nativeType"
        :class="[
            `button--${props.type}`,
            {
                'button--expanded': props.expanded
            }
        ]"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';

interface Props {
    type: 'primary' | 'secondary';
    expanded?: boolean;
    nativeType?: ButtonHTMLAttributes['type'];
}

const props = withDefaults(defineProps<Props>(), {
    nativeType: 'button'
});
</script>

<style lang="scss">
.button {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

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

        &:hover {
            background: var(--color-background);
        }
    }

    &--expanded {
        width: 100%;
    }
}
</style>
