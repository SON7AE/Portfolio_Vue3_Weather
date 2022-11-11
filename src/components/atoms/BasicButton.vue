<template>
    <button :data-theme="theme" class="basic-button">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.basic-button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 8px;
    background: transparent;
    border: none;

    font-family: 'SUIT-Regular';
    font-weight: 700;
    color: $color-white-000;

    cursor: pointer;

    &[data-theme='forecast'] {
        color: $color-blue-400;
    }
    &[data-theme='airquality'] {
        color: $color-red-300;
    }
}
</style>
