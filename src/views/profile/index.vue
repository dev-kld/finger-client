<template>
    <div class="profile">
        <div class="container">
            <BaseHeader type="title">
                Профиль
                <template #prepend>
                    <BaseDropdown>
                        <template #target>
                            <SvgIcon size="big" name="menu" />
                        </template>

                        <template #list>
                            <BaseDropdownItem @click="user.logout">Выйти из аккаунта</BaseDropdownItem>
                        </template>
                    </BaseDropdown>
                </template>
            </BaseHeader>

            <form class="profile-base">
                <BaseInput :model-value="userStore.user?.email" append-icon="user" disabled placeholder="email" />
                <BaseInput v-model="userName" append-icon="user" placeholder="Введите имя" />
                <BaseButton type="secondary" native-type="submit" expanded>Сохранить</BaseButton>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '~/components/Common/SvgIcon.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseInput from '~/components/Base/BaseInput.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseDropdown from '~/components/Base/BaseDropdown.vue';
import BaseDropdownItem from '~/components/Base/BaseDropdownItem.vue';
import { useStoreUser } from '~/stores/user';
import { ref } from 'vue';
import { useUser } from '~/composables/user';

const userStore = useStoreUser();
const userName = ref(userStore.user?.name || '');

const user = useUser();
</script>

<style lang="scss">
.profile-base {
    display: grid;
    gap: 8px;
}
</style>
