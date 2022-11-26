<template>
    <div
        class="input"
        :class="[
            {
                'input--has-append-icon': props.appendIcon,
                'input--disabled': props.disabled,
                'input--focused': isFocused
            }
        ]"
        @click="() => inputElement?.focus()"
    >
        <div class="input__append">
            <SvgIcon v-if="props.appendIcon" :name="props.appendIcon" class="input__icon" />
            <input
                ref="inputElement"
                class="input__element"
                :type="props.nativeType"
                :placeholder="props.placeholder"
                :value="props.modelValue"
                :disabled="props.disabled"
                @focus="isFocused = true"
                @blur="isFocused = false"
                @input="updateValue(($event.target as HTMLInputElement).value)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, type InputHTMLAttributes } from 'vue';
import SvgIcon from '~/components/Common/SvgIcon.vue';

type ModelValue = string | number | null;

interface Props {
    placeholder?: string;
    appendIcon?: string;
    nativeType?: InputHTMLAttributes['type'];
    modelValue?: ModelValue;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    nativeType: 'text'
});

const emits = defineEmits<{ (e: 'update:modelValue', value: ModelValue): void }>();

const updateValue = (value: ModelValue) => {
    const modelValue = props.nativeType === 'number' ? Number(value) : value;
    emits('update:modelValue', modelValue);
};

const inputElement = ref<null | HTMLInputElement>(null);
const isFocused = ref(false);
</script>

<style lang="scss">
.input {
    $self: &;
    $padding-x: 16px;

    display: flex;
    align-items: center;
    background: var(--color-background-lighter);
    font-size: 13px;
    border-radius: var(--app-base-element-border-radius);
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

    &--disabled {
        opacity: 0.5;
        border: 1px solid var(--color-border);
    }

    &--focused {
        background: var(--color-background-darker);
    }
}
</style>
