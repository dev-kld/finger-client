<template>
    <header v-if="breakpoints.tablet.value" class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header-menu">
                    <BaseLogo class="header-menu__logo" />

                    <nav class="header-nav">
                        <RouterLink v-for="navigation in navigationList" :key="navigation.title" to="/" class="header-nav__item">
                            {{ navigation.title }}
                        </RouterLink>
                    </nav>
                </div>

                <div class="header-actions">
                    <BaseButton type="primary" size="small" class="header-actions__add">Добавить заметку</BaseButton>
                    <BaseButton type="secondary" size="small">Профиль</BaseButton>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import BaseLogo from '~/components/Base/BaseLogo.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import { useNavigation } from '~/composables/navigation';
import { useBreakpoints } from '@vueuse/core';
import { BREAKPOINTS } from '~/helpers/constants';

const navigation = useNavigation();
const navigationList = [navigation.home, navigation.analytics, navigation.history];

const breakpoints = useBreakpoints(BREAKPOINTS);
</script>

<style lang="scss">
.header {
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.header-menu {
    display: flex;
    align-items: center;

    &__logo {
        margin-right: 64px;
    }
}

.header-nav {
    display: flex;
    align-items: center;

    &__item {
        font-size: 14px;
        opacity: 0.5;

        &.active-link {
            opacity: 1;
        }

        &:not(:last-child) {
            margin-right: 16px;
        }
    }
}

.header-actions {
    &__add {
        margin-right: 8px;
    }
}
</style>
