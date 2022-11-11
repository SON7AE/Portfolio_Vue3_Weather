<template>
    <div :data-theme="theme" class="filter-button">
        <span :data-theme="theme" class="option">Forecast</span>
        <span :data-theme="theme" class="option">Air Quality</span>
        <div :data-theme="theme" class="filter-button__active"></div>
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
        labels: {
            type: Array,
            required: true,
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
    min-height: 35px;

    border-radius: 10px;

    position: relative;

    &[data-theme='forecast'] {
        background-color: $color-button-background-blue;
    }
    &[data-theme='airquality'] {
        background-color: $color-button-background-red;
    }
    &__active {
        position: absolute;

        width: 50%;
        height: 100%;

        &[data-theme='forecast'] {
            background-color: $color-blue-000;
            border-radius: 10px;
        }
        &[data-theme='airquality'] {
            background-color: $color-red-000;
            border-radius: 10px;
            right: 0;
        }
    }
}
.option {
    width: 50%;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;

    color: $color-white-000;
    text-align: center;

    &[data-theme='forecast'] {
        color: $color-blue-500;
    }
    &[data-theme='airquality'] {
        color: $color-red-200;
    }
}
</style>
