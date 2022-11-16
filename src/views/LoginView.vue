<template>
    <div class="login">
        <div class="container">
            <BaseLogo class="login__logo" />

            <form class="login__form">
                <div class="login-fields">
                    <BaseInput placeholder="Введите email" class="login-fields__item" />
                    <div class="login-fields__item">
                        <BaseInput placeholder="Введите пароль" />
                        <RouterLink to="/" class="login-fields__reset-password">Забыли пароль?</RouterLink>
                    </div>
                </div>

                <div class="login-actions">
                    <BaseButton expanded type="primary" class="login-actions__button">Войти</BaseButton>
                    <BaseButton expanded type="secondary" class="login-actions__button">Зарегистрироваться</BaseButton>
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
.login {
    min-height: 100vh;
    display: flex;
    align-items: center;

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__logo {
        text-align: center;
    }

    &__form {
        margin-top: 32px;
    }
}

.login-fields {
    &__item {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    &__reset-password {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        opacity: 0.5;
        margin-top: 8px;
    }
}

.login-actions {
    margin-top: 24px;

    &__button {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
}
</style>
