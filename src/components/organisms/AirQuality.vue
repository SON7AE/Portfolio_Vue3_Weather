<template>
    <OuterFrame :theme="'airquality'">
        <Header />
        <FilterButton :theme="'airquality'" />
        <ForecastMain />
    </OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';
import FilterButton from '~/components/atoms/FilterButton.vue';

import Header from '~/components/molecules/Header.vue';
import ForecastMain from '~/components/molecules/airquality/Main.vue';

export default {
    components: { OuterFrame, FilterButton, Header, ForecastMain },
};
</script>

<style lang="scss" scoped></style>
