<template>
    <div
        v-on-click-outside="() => (isDropdownShown = false)"
        class="select"
        :class="[{ 'select--opened': isDropdownShown, 'select--no-selected': !selectedItem }]"
    >
        <div
            class="select-block"
            :class="[{ 'select-block--has-append-icon': props.appendIcon }]"
            @click="() => (isDropdownShown = !isDropdownShown)"
        >
            <div class="select-block__wrapper">
                <div class="select-block__append">
                    <SvgIcon v-if="props.appendIcon" :name="props.appendIcon" class="select-block__icon" />
                    <div class="select-block__element">{{ currentPlaceholder }}</div>
                </div>

                <SvgIcon name="chevron" class="select-block__chevron" />
            </div>
        </div>

        <div v-if="isDropdownShown" class="select-dropdown">
            <div class="select-dropdown__wrapper">
                <div
                    v-for="(item, itemIndex) in props.items"
                    :key="itemIndex"
                    class="select-item select-dropdown__item"
                    :class="[{ 'select-item--active': selectedItem?.value === item.value }]"
                    @click="handleSelectItem(item)"
                >
                    <SvgIcon v-if="item.icon" :name="item.icon" class="select-item__icon" />
                    <div class="select-item__title">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import SvgIcon from '~/components/Common/SvgIcon.vue';

export interface SelectItem {
    icon?: string;
    title: string;
    [key: string]: any;
}

interface Props {
    placeholder?: string;
    appendIcon?: string;
    items: SelectItem[];
    autoSelect?: boolean; // автоматически делает выбранным первое значение из `items`
}

const props = defineProps<Props>();
const isDropdownShown = ref(false);

const selectedItem = ref<null | SelectItem>(props.autoSelect ? props.items[0] : null);

const currentPlaceholder = computed(() => {
    if (selectedItem.value) {
        return selectedItem.value.title;
    }

    return props.placeholder;
});

const emits = defineEmits<{ (e: 'update:modelValue', value: SelectItem | null): void }>();
const updateValue = (value: SelectItem | null) => {
    emits('update:modelValue', value);
};

const handleSelectItem = (item: SelectItem) => {
    if (item.value !== selectedItem.value?.value) {
        selectedItem.value = item;
    }

    updateValue(selectedItem.value);

    isDropdownShown.value = false;
};

updateValue(selectedItem.value);
</script>

<style lang="scss">
$padding-x: 16px;

.select {
    $self: &;
    font-size: 13px;
    position: relative;

    &--opened {
        #{$self}-block {
            color: var(--color-secondary);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            .svg-icon {
                fill: var(--color-secondary);
            }

            &__chevron {
                transform: rotate(-180deg);
            }
        }

        #{$self}-dropdown {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }

    &--no-selected {
        #{$self}-block {
            &__element {
                opacity: 0.5;
            }
        }
    }
}

.select-block {
    $self: &;

    background: var(--color-background-lighter);
    border-radius: 16px;

    height: 40px;
    display: flex;
    align-items: center;

    cursor: pointer;
    user-select: none;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 $padding-x;
    }

    &__chevron {
        transition: transform 0.35s ease-in-out;
    }

    &--has-append-icon {
        #{$self}__append {
            display: flex;
        }

        #{$self}__icon {
            margin-right: 8px;
        }
    }
}

.select-dropdown {
    position: absolute;
    width: 100%;
    background: var(--color-background-lighter);
    border-radius: 16px;
    overflow: hidden;
    margin-top: 4px;
    max-height: 200px;
    overflow-y: scroll;
    z-index: 10;
}

.select-item {
    display: flex;
    align-items: center;
    padding: 8px $padding-x;
    cursor: pointer;

    &__icon {
        margin-right: 8px;
    }

    &:hover {
        background: var(--color-background);
    }

    &--active {
        color: var(--color-secondary);
    }
}
</style>
