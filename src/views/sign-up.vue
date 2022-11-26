<template>
    <div class="auth">
        <div class="container">
            <BaseLogo size="medium" class="auth__logo" />

            <form class="auth__form" @submit.prevent="handleFormSubmit">
                <div class="auth-fields">
                    <BaseInput v-model="form.email" placeholder="Введите Email" append-icon="user" class="auth-fields__item" />
                    <BaseInput v-model="form.name" placeholder="Введите имя" append-icon="user" class="auth-fields__item" />
                    <BaseInput
                        v-model="form.password"
                        placeholder="Введите пароль"
                        native-type="password"
                        append-icon="lock"
                        class="auth-fields__item"
                    />
                    <BaseInput
                        v-model="form.passwordRepeat"
                        placeholder="Повторите пароль"
                        native-type="password"
                        append-icon="lock"
                        class="auth-fields__item"
                    />
                </div>

                <div class="auth-actions">
                    <BaseButton expanded type="primary" native-type="submit" :loading="isSubmitting" class="auth-actions__button">
                        Зарегистрироваться
                    </BaseButton>
                    <BaseButton expanded type="secondary" class="auth-actions__button" @click="() => router.push({ name: 'SignIn' })">
                        Уже есть аккаунт?
                    </BaseButton>
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
import { reactive, ref } from 'vue';
import BaseLogo from '~/components/Base/BaseLogo.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import type { UserSignUpData } from '~/types/user';
import { useStoreUser } from '~/stores/user';
import { useRouter } from 'vue-router';
import { useUser } from '~/composables/user';

const userStore = useStoreUser();
const user = useUser();

const router = useRouter();

const form = reactive<UserSignUpData & { passwordRepeat: string }>({
    email: '',
    name: '',
    password: '',
    passwordRepeat: ''
});

const isSubmitting = ref(false);

const handleFormSubmit = async () => {
    isSubmitting.value = true;

    const formData: UserSignUpData = {
        email: form.email,
        name: form.name,
        password: form.password
    };

    try {
        const response = await userStore.signUp(formData);
        const { data: responseData } = response;

        user.signIn(responseData);
    } catch (e) {
        console.error(e);
    }

    isSubmitting.value = false;
};
</script>

<style lang="scss">
@import '~/assets/styles/components/auth.scss';
</style>
