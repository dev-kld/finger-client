<template>
    <main class="layout">
        <router-view />

        <LayoutBottomMenu v-if="isBottomMenuShown" class="layout__bottom-menu" />
    </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LayoutBottomMenu from '~/components/Layout/LayoutBottomMenu.vue';

const route = useRoute();

const isBottomMenuShown = computed(() => route.meta.bottomMenu);
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
}
</style>
