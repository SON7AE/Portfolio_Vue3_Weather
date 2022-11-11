<template>
    <OuterFrame :theme="'airquality'">
        <Header />
        <FilterButton :theme="'airquality'" />
        <AirqualityMain />
    </OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';
import FilterButton from '~/components/atoms/FilterButton.vue';

import Header from '~/components/molecules/Header.vue';
import AirqualityMain from '~/components/molecules/airquality/Main.vue';

export default {
    components: { OuterFrame, FilterButton, Header, AirqualityMain },
};
</script>

<style lang="scss" scoped></style>
