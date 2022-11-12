<template>
    <div class="timely-weather">
        <span class="timely-weather__time">8am</span>
        <span class="timely-weather__info">매우 나쁨</span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.timely-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 78px;
    min-width: 78px;
    height: 78px;

    gap: 8px;

    background-color: $color-red-100;
    border-radius: 20px;

    color: $color-white-000;
    font-family: 'SUIT-Regular';

    &__time {
        font-weight: 500;
    }
    &__info {
        font-weight: 700;
    }
}
</style>
