<template>
    <div class="auth">
        <div class="container">
            <BaseLogo size="medium" class="auth__logo" />

            <form class="auth__form" @submit.prevent="handleFormSubmit">
                <div class="auth-fields">
                    <BaseInput v-model="form.login" placeholder="Введите логин" append-icon="user" class="auth-fields__item" />
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
import type { UserSignInData } from '~/types/user';
import type { ApiResponseSignUp } from '~/types/api';
import { useStoreUser } from '~/stores/user';
import { useRouter } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from '~/helpers/constants';

const cookies = useCookies();

const userStore = useStoreUser();

const router = useRouter();

const account = 'test11';
const form = reactive<UserSignInData & { passwordRepeat: string }>({
    login: account,
    name: account,
    password: account,
    passwordRepeat: account
});

const isSubmitting = ref(false);

const handleFormSubmit = async () => {
    isSubmitting.value = true;

    const formData: UserSignInData = {
        login: form.login,
        name: form.name,
        password: form.password
    };

    try {
        const response = await userStore.signUp(formData);
        const { data: responseData } = response;

        cookies.set(COOKIE_ACCESS_TOKEN_KEY, responseData.accessToken);
        cookies.set(COOKIE_ACCESS_TOKEN_EXPIRING_KEY, responseData.accessTokenExpiredAt);

        const user: Partial<ApiResponseSignUp> = Object.assign({}, responseData);
        delete user.accessToken;
        delete user.accessTokenExpiredAt;

        userStore.$patch({ user });
    } catch (e) {
        console.log(e);
    }

    isSubmitting.value = false;
};
</script>

<style lang="scss">
@import '~/assets/styles/components/auth.scss';
</style>
