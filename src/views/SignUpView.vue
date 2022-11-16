<template>
    <div class="auth">
        <div class="container">
            <BaseLogo class="auth__logo" />

            <form class="auth__form">
                <div class="auth-fields">
                    <BaseInput placeholder="Введите email" append-icon="user" class="auth-fields__item" />
                    <BaseInput placeholder="Введите пароль" append-icon="lock" class="auth-fields__item" />
                    <BaseInput placeholder="Повторите пароль" append-icon="lock" class="auth-fields__item" />
                </div>

                <div class="auth-actions">
                    <BaseButton expanded type="primary" class="auth-actions__button">Зарегистрироваться</BaseButton>
                    <BaseButton expanded type="secondary" class="auth-actions__button">Уже есть аккаунт?</BaseButton>
                </div>
            </form>

            <p class="auth__privacy">
                Регистрируясь или подключаясь к вышеуказанным службам, вы соглашаетесь с нашими <a href="#">Права Использования</a> и
                принимаете нашу <a href="#">Политика конфиденциальности</a>, описывающие как мы обрабатываем ваши персональные данные.
            </p>
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
