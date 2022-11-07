<template>
    <div :data-theme="theme" class="outer-frame">
        <slot></slot>
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

.outer-frame {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 280px;
    height: 600px;

    gap: 32px;
    padding: 40px;

    border-radius: 30px;
    box-shadow: 5px 5px 5px gray;

    &[data-theme='forecast'] {
        background: $color-background-blue;
    }
    &[data-theme='airquality'] {
        background: $color-background-red;
    }
}
</style>
