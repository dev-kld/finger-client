<template>
    <header class="header">
        <template v-if="props.type === 'user'">
            <div class="header-user">
                <div class="header-user__avatar">К</div>
                <span class="header-user__name">Кирилл</span>
            </div>
        </template>

        <template v-if="props.type === 'history'">
            <div class="header-back" @click="() => router.go(-1)">
                <SvgIcon name="arrow-left" class="header-back__icon" />
                <span class="header-back__title">Назад</span>
            </div>
        </template>

        <div v-if="$slots.title" class="header__title">
            <slot name="title"></slot>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import SvgIcon from '~/components/Common/SvgIcon.vue';

interface Props {
    type: 'user' | 'history';
}

const props = defineProps<Props>();

const router = useRouter();
</script>

<style lang="scss">
.header {
    margin-bottom: 32px;

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
