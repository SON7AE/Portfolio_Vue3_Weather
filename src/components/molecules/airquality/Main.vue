<template>
    <div class="main">
        <span class="main__description">{{ sReWeatherStatus }}</span>
        <AirqualityWeatherCard />
        <Map />
    </div>
</template>

<script>
import AirqualityWeatherCard from '~/components/molecules/airquality/WeatherCard.vue';
import Map from '~/components/atoms/Map.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { AirqualityWeatherCard, Map },
    setup() {
        const store = useStore();
        store.FETCH_OPENWEATHER_API();

        const { sReWeatherStatus } = storeToRefs(store);

        return { sReWeatherStatus };
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
