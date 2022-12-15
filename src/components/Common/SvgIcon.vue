<template>
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="svg-icon" :class="[`svg-icon--${props.size}`]">
        <use :href="symbolId" />
    </svg>
</template>

<script lang="ts" setup>
import pathToSprite from '~/assets/generated-sprite.svg';
import type { Size } from '~/types/app';

interface Props {
    name: string;
    size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'medium'
});

const symbolId = `${pathToSprite}#${props.name}`;
</script>

<style lang="scss">
.svg-icon {
    fill: var(--color-white);

    &--medium {
        width: 16px;
        height: 16px;
    }

    &--big {
        width: 24px;
        height: 24px;
    }
}
</style>
