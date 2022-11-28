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

import { ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { detailWeather, ForecastWeatherCard },
    setup() {
        const store = useStore();
        store.FETCH_OPENWEATHER_API();

        const { nCurrentTemp, sWeatherIcon, aWeatherInfos } = storeToRefs(store);

        const currentTemp = ref(nCurrentTemp); // 현재 온도
        const weatherIcon = ref(sWeatherIcon); // 현재 날씨아이콘
        const weatherInfos = ref(aWeatherInfos); // 현재 디테일 날씨 데이터 배열

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
