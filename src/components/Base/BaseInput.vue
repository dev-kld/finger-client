<template>
    <div
        class="input"
        :class="[
            {
                'input--has-append-icon': props.appendIcon
            }
        ]"
    >
        <div class="input__wrapper">
            <SvgIcon v-if="props.appendIcon" :name="props.appendIcon" class="input__icon" />
            <div class="input__append">
                <input
                    :type="props.nativeType"
                    class="input__element"
                    :placeholder="props.placeholder"
                    @input="updateValue(($event.target as HTMLInputElement).value)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';
import SvgIcon from '~/components/Common/SvgIcon.vue';

interface Props {
    placeholder?: string;
    appendIcon?: string;
    nativeType?: InputHTMLAttributes['type'];
}

const props = withDefaults(defineProps<Props>(), {
    nativeType: 'text'
});
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const updateValue = (value: string) => {
    emits('update:modelValue', value);
};
</script>

<style lang="scss">
.input {
    $padding-x: 16px;

    position: relative;
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
        padding: 0 $padding-x;

        &::placeholder {
            color: rgba(var(--color-white-rgb), 0.5);
        }
    }

    &__icon {
        position: absolute;
        height: 100%;
        left: calc($padding-x * 1.5);
        transform: translateX(-50%);
    }

    &--has-append-icon {
        padding-left: calc($padding-x * 1.5);
    }
}
</style>
