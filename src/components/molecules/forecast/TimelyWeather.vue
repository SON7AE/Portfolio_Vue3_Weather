<template>
    <div class="timely-weather">
        <img src="~/assets/images/11n.png" alt="시간대별 날씨 이미지" class="timely-weather__image" />
        <div class="timely-weather__info">
            <span class="timely-weather__info__time">10am</span>
            <span class="timely-weather__info__temp">-2&#8451;</span>
            <span class="timely-weather__info__humidity">
                <img src="~/assets/images/drop.png" alt="" class="timely-weather__info__humidity__image" />
                15%
            </span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.timely-weather {
    display: flex;
    align-items: center;

    width: 120px;
    min-width: 120px;
    height: 62px;

    padding: 8px;

    background-color: $color-blue-100;
    border-radius: 20px;

    &__image {
        width: 45%;
    }
    &__info {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 55%;

        gap: 6px;

        color: $color-white-000;
        font-family: 'SUIT-Regular';

        &__time {
        }
        &__temp {
        }
        &__humidity {
            display: flex;
            align-items: center;

            gap: 2px;

            &__image {
                height: 16px;
            }
        }
    }
}
</style>
