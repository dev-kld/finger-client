<template>
    <main class="layout">
        <LayoutHeader class="layout__header" />

        <RouterView />

        <LayoutBottomMenu v-if="isBottomMenuShown" class="layout__bottom-menu" />

        <div class="layout-notifications layout__notifications">
            <ToastNotification v-for="notification in appStore.notifications" :key="notification.id" :notification="notification">
                {{ notification.code ? API_ERRORS[notification.code].description : notification.message }}
            </ToastNotification>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useBreakpoints } from '@vueuse/core';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { BREAKPOINTS } from '~/helpers/constants';
import LayoutBottomMenu from '~/components/Layout/LayoutBottomMenu.vue';
import LayoutHeader from '~/components/Layout/LayoutHeader.vue';
import { useStoreApp } from './stores/app';
import ToastNotification from '~/components/Common/ToastNotification.vue';
import { API_ERRORS } from '~/helpers/api-errors';

const appStore = useStoreApp();
const route = useRoute();

const breakpoints = useBreakpoints(BREAKPOINTS);
const isBottomMenuShown = computed(() => !route.meta.bottomMenuHidden && !breakpoints.tablet.value);
</script>

<style lang="scss">
.layout {
    padding: 56px 0 calc(16px + var(--app-bottom-menu-height));

    &__bottom-menu {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    @media (min-width: #{map-get($breakpoints, 'tablet')}) {
        padding-top: 24px;
    }

    &__notifications {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 32px;
        max-width: 90%;
        width: 100%;
        display: grid;
        gap: 8px;
    }
}
</style>
