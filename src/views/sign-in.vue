<template>
    <div class="auth">
        <div class="container">
            <BaseLogo size="medium" class="auth__logo" />

            <form class="auth__form" @submit.prevent="handleFormSubmit">
                <div class="auth-fields">
                    <BaseInput v-model="form.email" placeholder="Введите email" append-icon="user" class="auth-fields__item" />
                    <div class="auth-fields__item">
                        <BaseInput v-model="form.password" native-type="password" placeholder="Введите пароль" append-icon="lock" />
                        <RouterLink to="/" class="auth-fields__reset-password">Забыли пароль?</RouterLink>
                    </div>
                </div>

                <div class="auth-actions">
                    <BaseButton expanded type="primary" native-type="submit" :loading="isSubmitting" class="auth-actions__button">
                        Войти
                    </BaseButton>
                    <BaseButton expanded type="secondary" class="auth-actions__button" @click="() => router.push({ name: 'SignUp' })">
                        Зарегистрироваться
                    </BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseLogo from '~/components/Base/BaseLogo.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStoreUser } from '~/stores/user';
import type { UserSignInData } from '~/types/user';
import { useUser } from '~/composables/user';

const router = useRouter();
const userStore = useStoreUser();
const user = useUser();

const form = reactive<UserSignInData>({
    email: '',
    password: ''
});

const isSubmitting = ref(false);

const handleFormSubmit = async () => {
    isSubmitting.value = true;

    try {
        const response = await userStore.signIn(form);
        user.signIn(response.data);
    } catch (e) {
        console.log(e);
    }

    isSubmitting.value = false;
};
</script>

<style lang="scss">
@import '~/assets/styles/components/auth.scss';
</style>
