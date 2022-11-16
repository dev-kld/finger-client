<template>
    <div class="auth">
        <div class="container">
            <BaseLogo class="auth__logo" />

            <form class="auth__form">
                <div class="auth-fields">
                    <BaseInput placeholder="Введите email" append-icon="user" class="auth-fields__item" />
                    <div class="auth-fields__item">
                        <BaseInput placeholder="Введите пароль" append-icon="lock" />
                        <RouterLink to="/" class="auth-fields__reset-password">Забыли пароль?</RouterLink>
                    </div>
                </div>

                <div class="auth-actions">
                    <BaseButton expanded type="primary" class="auth-actions__button">Войти</BaseButton>
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
</script>

<style lang="scss">
@import '~/assets/styles/components/auth.scss';
</style>
