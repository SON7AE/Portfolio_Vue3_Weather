<template>
    <div class="main">
        <span class="main__description">매우 나쁨</span>
        <AirqualityWeatherCard />
    </div>
</template>

<script>
import AirqualityWeatherCard from '~/components/molecules/airquality/WeatherCard.vue';

export default {
    components: { AirqualityWeatherCard },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;

    &__description {
        font-family: 'BMJUA';
        font-weight: 700;
        font-size: 48px;

        color: $color-white-000;
        margin-top: -8px;
    }
    &__representive-weather {
        display: flex;
        align-items: center;

        gap: 62px;

        margin-top: 8px;
    }
}
</style>
