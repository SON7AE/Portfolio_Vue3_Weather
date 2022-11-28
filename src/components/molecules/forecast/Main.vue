<template>
    <div class="main">
        <span class="main__temperature">{{ currentTemp }}<span style="font-size: 46px; font-family: 'TmoneyRoundWindExtraBold'">&#8451;</span></span>
        <img :src="`src/assets/images/${weatherIcon}.png`" alt="" class="main__weather-image" />
        <div class="main__representive-weather">
            <detailWeather v-for="info in weatherInfos" :key="info.label" :info="info" />
        </div>
        <ForecastWeatherCard />
    </div>
</template>

<script>
import detailWeather from '~/components/atoms/detailWeather.vue';
import ForecastWeatherCard from '~/components/molecules/forecast/WeatherCard.vue';

import { reactive } from '@vue/reactivity';
import { useStore } from '~/store/index';

export default {
    components: { detailWeather, ForecastWeatherCard },
    setup() {
        const store = useStore();

        const currentTemp = store.nCurrentTemp; // 현재 온도
        const currentHumidity = store.nCurrentHumidity; // 현재 습도
        const currentWindSpeed = store.nCurrentWindSpeed; // 현재 풍속
        const currentWindChill = store.nCurrentWindChill; // 현재 체감온도

        const weatherInfos = reactive([
            {
                label: '습도',
                value: currentHumidity + '%',
            },
            {
                label: '풍속',
                value: currentWindSpeed + 'm/s',
            },
            {
                label: '체감온도',
                value: currentWindChill + '도',
            },
        ]);

        const weatherIcon = store.sWeatherIcon; // 현재 날씨아이콘

        return {
            store,
            currentTemp,
            weatherInfos,
            weatherIcon,
        };
    },
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
        font-size: 56px;

        color: $color-white-000;
        margin-top: -8px;
    }
    &__weather-image {
        height: 180px;
    }
    &__representive-weather {
        display: flex;
        align-items: center;

        gap: 50px;

        margin-top: 8px;
    }
}
</style>
