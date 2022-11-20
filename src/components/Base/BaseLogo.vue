<template>
    <div class="logo" :class="[`logo--${props.size}`]">Finger</div>
</template>

<script lang="ts" setup>
import type { Size } from '~/types/global';

interface Props {
    size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'small'
});
</script>

<style lang="scss">
.logo {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;

    &--small {
        font-size: 14px;
    }

    &--medium {
        font-size: 24px;
    }
}
</style>
