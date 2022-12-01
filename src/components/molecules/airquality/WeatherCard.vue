<template>
    <div class="weather-card">
        <div class="weather-card__button-box">
            <BasicButton :label="'시간대별 대기 정보'" />
            <BasicButton :label="'이번 주 전체 보기'" :data-theme="'airquality'" />
        </div>
        <div class="weather-card__info-box">
            <AirqualityTimelyWeather v-for="data in aTimelyWeatherHpas" :key="data" :data="data" class="weather-card__info-box__timely-weather" />
        </div>
    </div>
</template>

<script>
import BasicButton from '~/components/atoms/BasicButton.vue';
import AirqualityTimelyWeather from '~/components/molecules/airquality/TimelyWeather.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { BasicButton, AirqualityTimelyWeather },
    setup() {
        const store = useStore();
        store.FETCH_OPENWEATHER_API();

        const { aTimelyWeatherHpas } = storeToRefs(store);

        return { aTimelyWeatherHpas };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.weather-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 12px;

    &__button-box {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        gap: 48px;
    }
    &__info-box {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 280px;

        padding: 8px;
        gap: 12px;

        overflow: scroll;

        &__timely-weather {
            &:first-child {
                background-color: $color-red-000;
            }
        }
    }
}
</style>
