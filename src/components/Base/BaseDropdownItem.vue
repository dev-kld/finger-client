<template>
    <div class="dropdown-item">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.dropdown-item {
    font-size: 14px;
    padding: 8px 24px;
    white-space: nowrap;
    cursor: pointer;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(var(--color-white-rgb), 0.2);
    }

    &:hover {
        background: var(--color-primary-darker);
    }
}
</style>
