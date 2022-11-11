<template>
    <div class="detail-weather">
        <span class="detail-weather__label">습도</span>
        <span class="detail-weather__value">88%</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.detail-weather {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    &__label {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: $color-blue-200;
    }
    &__value {
        font-family: 'TmoneyRoundWindExtraBold';
        font-size: 18px;
        font-weight: 500;
        color: $color-white-000;
    }
}
</style>
