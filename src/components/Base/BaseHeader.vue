<template>
    <header class="header">
        <div class="header__wrapper">
            <div v-if="props.type === 'user'" class="header-user">
                <div class="header-user__avatar">{{ userStore.user?.name[0].toUpperCase() }}</div>
                <span class="header-user__name">{{ userStore.user?.name }}</span>
            </div>

            <div v-else-if="props.type === 'history'" class="header-back" @click="() => router.go(-1)">
                <SvgIcon name="arrow-left" class="header-back__icon" />
                <span class="header-back__title">Назад</span>
            </div>

            <div v-else-if="props.type === 'title'" class="header-title">
                <slot></slot>
            </div>

            <div v-if="$slots.prepend" class="header__prepend">
                <slot name="prepend" />
            </div>
        </div>

        <div v-if="$slots.title" class="header__title">
            <slot name="title"></slot>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import SvgIcon from '~/components/Common/SvgIcon.vue';
import { useStoreUser } from '~/stores/user';

interface Props {
    type: 'user' | 'history' | 'title';
}

const userStore = useStoreUser();
const props = defineProps<Props>();
const router = useRouter();
</script>

<style lang="scss">
.header {
    &__title {
        font-size: 20px;
        font-weight: 700;
        margin-top: 32px;
    }

    &__prepend {
        display: flex;
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

.header-title {
    font-size: 20px;
    font-weight: 700;
}
</style>
