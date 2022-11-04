<template>
    <div :data-theme="theme" class="filter-button">
        <span class="option">Forecast</span>
        <span class="option">Air Quality</span>
    </div>
</template>

<script>
export default {
    props: {
        theme: {
            /**@type {import("vue").PropType<Theme>} */
            type: String,
            required: false,
            /**@type {Theme} */
            default: 'forecast',
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.filter-button {
    display: flex;
    align-items: center;

    width: 224px;
    height: 35px;

    border-radius: 10px;

    &[data-theme='forecast'] {
        background-color: $color-button-background-blue;
    }
    &[data-theme='airquality'] {
        background-color: $color-button-background-red;
    }
}
.option {
    width: 50%;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;

    color: $color-white-000;
    text-align: center;
}
</style>
