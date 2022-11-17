<template>
    <main class="layout">
        <router-view />

        <LayoutBottomMenu class="layout__bottom-menu" />
    </main>
</template>

<script lang="ts" setup>
import LayoutBottomMenu from '~/components/Layout/LayoutBottomMenu.vue';
</script>

<style lang="scss">
.layout {
    &__bottom-menu {
        position: fixed;
        width: 100%;
        bottom: 0;
    }
}
</style>
