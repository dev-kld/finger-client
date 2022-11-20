<template>
    <header v-if="!breakpoints.tablet.value" class="header">
        <div v-if="props.type === 'user'" class="header-user">
            <div class="header-user__avatar">К</div>
            <span class="header-user__name">Кирилл</span>
        </div>

        <div v-if="props.type === 'history'" class="header-back" @click="() => router.go(-1)">
            <SvgIcon name="arrow-left" class="header-back__icon" />
            <span class="header-back__title">Назад</span>
        </div>

        <div v-if="$slots.title" class="header__title">
            <slot name="title"></slot>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useBreakpoints } from '@vueuse/core';
import { useRouter } from 'vue-router';
import SvgIcon from '~/components/Common/SvgIcon.vue';
import { BREAKPOINTS } from '~/helpers/constants';

interface Props {
    type?: 'user' | 'history';
}

const props = defineProps<Props>();
const router = useRouter();

const breakpoints = useBreakpoints(BREAKPOINTS);
</script>

<style lang="scss">
.header {
    &__title {
        font-size: 20px;
        font-weight: 700;
        margin-top: 32px;
    }
}

.header-back {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__title {
        margin-left: 8px;
        font-size: 13px;
    }
}

.header-user {
    display: flex;
    align-items: center;

    &__avatar {
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--color-primary);
    }

    &__name {
        font-size: 20px;
        font-weight: 700;
        margin-left: 12px;
    }
}
</style>
