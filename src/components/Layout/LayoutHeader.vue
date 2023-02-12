<template>
    <header v-if="isHeaderShown" class="header">
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
                    <BaseButton
                        type="primary"
                        size="small"
                        class="header-actions__add"
                        @click="() => router.push({ name: 'CreateRecord' })"
                    >
                        Добавить запись
                    </BaseButton>
                    <BaseButton type="secondary" size="small" @click="() => user.logout()">Выйти из аккаунта</BaseButton>
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
import { useUser } from '~/composables/user';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navigation = useNavigation();
const navigationList = [navigation.home, navigation.analytics, navigation.history];

const breakpoints = useBreakpoints(BREAKPOINTS);

const isHeaderShown = computed(() => {
    return breakpoints.tablet.value && !route.meta.headerHidden;
});

const user = useUser();
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
