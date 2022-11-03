<template>
    <OuterFrame :theme="'forecast'">
        <Header />
    </OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';
import Header from '~/components/molecules/Header.vue';

export default {
    components: { OuterFrame, Header },
};
</script>

<style lang="scss" scoped></style>
