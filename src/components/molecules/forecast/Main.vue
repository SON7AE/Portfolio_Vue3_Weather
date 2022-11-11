<template>
    <div class="main">
        <span class="main__temperature">-2<span style="font-size: 44px; font-family: 'TmoneyRoundWindExtraBold'">&#8451;</span></span>
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
        font-family: 'BMJUA';
        font-weight: 700;
        font-size: 52px;

        color: $color-white-000;
        margin-top: -8px;
    }
    &__weather-image {
        height: 180px;
    }
    &__representive-weather {
        display: flex;
        align-items: center;

        gap: 62px;

        margin-top: 8px;
    }
}
</style>
