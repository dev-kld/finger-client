<template>
    <div class="accountDetails">
        <div class="container">
            <BaseHeader type="history" class="accountDetails-header">
                <template #prepend>
                    <BaseButton type="secondary" view="danger" class="accountDetails-header__item" @click="handleDeleteAccount">
                        <SvgIcon name="trash" />
                    </BaseButton>
                    <BaseButton type="secondary" class="accountDetails-header__item">
                        <SvgIcon name="edit" />
                    </BaseButton>
                </template>
            </BaseHeader>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '~/components/Common/SvgIcon.vue';
import BaseHeader from '~/components/Base/BaseHeader.vue';
import BaseButton from '~/components/Base/BaseButton.vue';
import { useRoute } from 'vue-router';
import { useStoreAccount } from '~/stores/account';
import router from '~/router';

const route = useRoute();
const routeId = route.params.id as string;

const accountsStore = useStoreAccount();

const handleDeleteAccount = async () => {
    await accountsStore.deleteAccount(routeId);
    router.push({ name: 'Home' });
};
</script>

<style lang="scss">
.accountDetails {
    &-header {
        &__item {
            &:not(:last-child) {
                margin-right: 8px;
            }
        }
    }
}
</style>
