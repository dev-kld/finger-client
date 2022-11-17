<template>
    <nav class="bottom-menu">
        <div class="container">
            <div class="bottom-menu__wrapper">
                <RouterLink v-for="(navItem, navIndex) in navigation.slice(0, 2)" :key="navIndex" to="/" class="menu-item">
                    <SvgIcon :name="navItem.icon" class="menu-item__icon" />
                    <div class="menu-item__name">{{ navItem.title }}</div>
                </RouterLink>

                <button class="bottom-menu__add">+</button>

                <div v-for="(navItem, navIndex) in navigation.slice(2, navigation.length)" :key="navIndex" to="/" class="menu-item">
                    <SvgIcon :name="navItem.icon" class="menu-item__icon" />
                    <div class="menu-item__name">{{ navItem.title }}</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SvgIcon from '~/components/Common/SvgIcon.vue';

interface NavigationItem {
    icon: string;
    title: string;
}

const navigation = ref<NavigationItem[]>([
    { icon: 'home', title: 'Главная' },
    { icon: 'activity', title: 'Аналитика' },
    { icon: 'book', title: 'История' },
    { icon: 'user', title: 'Профиль' }
]);
</script>

<style lang="scss">
.bottom-menu {
    padding: 8px 0;
    background: var(--color-background-darker);

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__add {
        width: 40px;
        height: 40px;
        color: var(--color-white);
        background: linear-gradient(180deg, #1e203b 0%, rgba(23, 25, 48, 0.5) 100%);
        border-radius: 100%;
        font-size: 28px;
        flex-shrink: 0;
    }
}

.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;

    &__icon {
        width: 20px;
        height: 20px;
        margin-bottom: 8px;
    }
}
</style>
