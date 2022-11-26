<template>
    <nav class="bottom-menu">
        <div class="container">
            <div class="bottom-menu__wrapper">
                <RouterLink v-for="(navItem, navIndex) in navigationList.slice(0, 2)" :key="navIndex" to="/" class="menu-item">
                    <SvgIcon :name="navItem.icon" class="menu-item__icon" />
                    <div class="menu-item__name">{{ navItem.title }}</div>
                </RouterLink>

                <button class="bottom-menu__add">+</button>

                <RouterLink
                    v-for="(navItem, navIndex) in navigationList.slice(2, navigationList.length)"
                    :key="navIndex"
                    :to="navItem.to"
                    class="menu-item"
                >
                    <SvgIcon :name="navItem.icon" class="menu-item__icon" />
                    <div class="menu-item__name">{{ navItem.title }}</div>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import SvgIcon from '~/components/Common/SvgIcon.vue';
import { useNavigation } from '~/composables/navigation';

const navigation = useNavigation();
const navigationList = [navigation.home, navigation.analytics, navigation.history, navigation.profile];
</script>

<style lang="scss">
.bottom-menu {
    height: var(--app-bottom-menu-height);
    display: flex;
    align-items: center;
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
