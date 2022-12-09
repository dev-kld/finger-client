<template>
    <div class="accounts-grid" :style="{ '--accounts-grid-columns': props.columns }">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    columns?: number;
}

const props = withDefaults(defineProps<Props>(), {
    columns: 2
});
</script>

<style lang="scss">
.accounts-grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(var(--accounts-grid-columns), 1fr);
    gap: 16px;
}
</style>
