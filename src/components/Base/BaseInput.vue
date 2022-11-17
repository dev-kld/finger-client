<template>
    <div
        class="input"
        :class="[
            {
                'input--has-append-icon': props.appendIcon
            }
        ]"
        @click="() => inputElement?.focus()"
    >
        <div class="input__append">
            <SvgIcon v-if="props.appendIcon" :name="props.appendIcon" class="input__icon" />
            <input
                ref="inputElement"
                :type="props.nativeType"
                class="input__element"
                :placeholder="props.placeholder"
                @input="updateValue(($event.target as HTMLInputElement).value)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, type InputHTMLAttributes } from 'vue';
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

const inputElement = ref<null | HTMLInputElement>(null);
</script>

<style lang="scss">
.input {
    $self: &;
    $padding-x: 16px;

    display: flex;
    align-items: center;
    background: var(--color-background-lighter);
    font-size: 13px;
    border-radius: 16px;
    height: 40px;
    padding: 0 $padding-x;

    &__element {
        width: 100%;
        color: var(--color-white);

        &::placeholder {
            color: rgba(var(--color-white-rgb), 0.5);
        }
    }

    &__append {
        display: flex;
        align-items: center;
        width: 100%;
    }

    &--has-append-icon {
        #{$self}__icon {
            margin-right: 8px;
        }
    }
}
</style>
