<template>
    <div class="input">
        <div class="input__wrapper">
            <div class="input__append">
                <input type="text" class="input__element" :placeholder="props.placeholder" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    placeholder?: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.input {
    background: var(--color-background-lighter);
    font-size: 13px;
    border-radius: 16px;

    &__element {
        height: 40px;
        width: 100%;
        color: var(--color-white);
        background: none;
        border: none;
        outline: none;
        padding: 0 16px;

        &::placeholder {
            color: rgba(var(--color-white-rgb), 0.5);
        }
    }
}
</style>
