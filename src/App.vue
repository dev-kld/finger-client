<template>
    <main class="layout">
        <LayoutHeader class="layout__header" />

        <RouterView />

        <LayoutBottomMenu v-if="isBottomMenuShown" class="layout__bottom-menu" />
    </main>
</template>

<script lang="ts" setup>
import { useBreakpoints } from '@vueuse/core';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { BREAKPOINTS } from './helpers/constants';
import LayoutBottomMenu from '~/components/Layout/LayoutBottomMenu.vue';
import LayoutHeader from '~/components/Layout/LayoutHeader.vue';

const route = useRoute();

const breakpoints = useBreakpoints(BREAKPOINTS);
const isBottomMenuShown = computed(() => route.meta.bottomMenu && !breakpoints.tablet.value);
</script>

<style lang="scss">
.layout {
    padding: 56px 0 var(--app-bottom-menu-height);

    &__bottom-menu {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    @media (min-width: #{map-get($breakpoints, 'tablet')}) {
        padding-top: 24px;
    }
}
</style>
