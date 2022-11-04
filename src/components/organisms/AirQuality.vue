<template>
    <OuterFrame :theme="'airquality'">
        <Header />
        <FilterButton :theme="'airquality'" />
    </OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';
import FilterButton from '~/components/atoms/FilterButton.vue';

import Header from '~/components/molecules/Header.vue';

export default {
    components: { OuterFrame, FilterButton, Header },
};
</script>

<style lang="scss" scoped></style>
