<template>
    <div :data-theme="theme" class="filter-button">
        <span :data-theme="theme" class="option forecast">Forecast</span>
        <span :data-theme="theme" class="option airquality">Air Quality</span>
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
    setup() {},
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

    border-radius: 10px;
    text-align: center;

    &[data-theme='forecast'] {
        color: $color-blue-500;

        &.forecast {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 100%;
            background-color: $color-blue-000;
            color: $color-white-000;
        }
    }
    &[data-theme='airquality'] {
        color: $color-red-200;

        &.airquality {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 100%;
            background-color: $color-red-000;
            color: $color-white-000;
        }
    }
}
</style>
