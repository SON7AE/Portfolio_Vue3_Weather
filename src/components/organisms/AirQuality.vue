<template>
    <OuterFrame :theme="'airquality'">왼쪽 컴포넌트</OuterFrame>
</template>

<script>
import OuterFrame from '~/components/atoms/OuterFrame.vue';

export default {
    components: { OuterFrame },
};
</script>

<style lang="scss" scoped></style>
