<template>
    <div v-on-click-outside="() => (isDropdownShown = false)" class="dropdown" :class="[{ 'dropdown--shown': isDropdownShown }]">
        <div class="dropdown__target" @click="() => (isDropdownShown = !isDropdownShown)">
            <slot name="target"></slot>
        </div>

        <div v-if="isDropdownShown" class="dropdown__list">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

const isDropdownShown = ref(false);
</script>

<style lang="scss">
.dropdown {
    position: relative;
    z-index: 10;

    &__target {
        cursor: pointer;
    }

    &__list {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--color-primary);
        border-radius: 16px;
        border-top-right-radius: 0;
        overflow: hidden;
        box-shadow: 0px 4px 8px rgba(35, 62, 157, 0.4);
        user-select: none;
    }

    &--shown {
        .svg-icon {
            fill: var(--color-primary);
        }
    }
}
</style>
