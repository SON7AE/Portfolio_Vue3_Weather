<template>
    <div class="main">
        <span class="main__temperature">-2&#8451;</span>
        <img src="~/assets/images/10d.png" alt="" class="main__weather-image" />
        <div class="main__representive-weather">
            <detailWeather />
            <detailWeather />
            <detailWeather />
        </div>
        <WeatherCard />
    </div>
</template>

<script>
import detailWeather from '~/components/atoms/detailWeather.vue';
import WeatherCard from '~/components/molecules/forecast/WeatherCard.vue';

export default {
    components: { detailWeather, WeatherCard },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;

    &__temperature {
        font-family: 'SUIT-Regular';
        font-weight: 700;
        font-size: 52px;

        color: $color-white-000;
    }
    &__weather-image {
        height: 188px;
    }
    &__representive-weather {
        display: flex;
        align-items: center;

        gap: 56px;

        margin-top: 8px;
    }
}
</style>
