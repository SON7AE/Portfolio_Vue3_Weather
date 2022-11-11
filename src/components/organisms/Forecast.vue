<template>
    <OuterFrame :theme="'forecast'">
        <Header />
        <FilterButton :theme="'forecast'" />
        <Main />
    </OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';
import FilterButton from '~/components/atoms/FilterButton.vue';

import Header from '~/components/molecules/Header.vue';
import Main from '~/components/molecules/forecast/Main.vue';

export default {
    components: { OuterFrame, FilterButton, Header, Main },
};
</script>

<style lang="scss" scoped></style>
