<template>
    <div class="auth">
        <div class="container">
            <BaseLogo size="medium" class="auth__logo" />

            <form class="auth__form" @submit.prevent="">
                <div class="auth-fields">
                    <BaseInput v-model="email" placeholder="Введите email" append-icon="user" class="auth-fields__item" />
                    <div class="auth-fields__item">
                        <BaseInput v-model="password" native-type="password" placeholder="Введите пароль" append-icon="lock" />
                        <RouterLink to="/" class="auth-fields__reset-password">Забыли пароль?</RouterLink>
                    </div>
                </div>

                <div class="auth-actions">
                    <BaseButton expanded type="primary" native-type="submit" class="auth-actions__button">Войти</BaseButton>
                    <BaseButton expanded type="secondary" class="auth-actions__button">Зарегистрироваться</BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseLogo from '~/components/Base/BaseLogo.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<style lang="scss">
@import '~/assets/styles/components/auth.scss';
</style>
