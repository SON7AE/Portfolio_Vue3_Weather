<template>
    <div class="layout">
        <Forecast />
        <AirQuality />
    </div>
</template>

<script>
import Forecast from '~/components/organisms/Forecast.vue';
import AirQuality from '~/components/organisms/AirQuality.vue';

export default {
    components: { Forecast, AirQuality },
};
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 80px;
    padding: 40px;
}
</style>
