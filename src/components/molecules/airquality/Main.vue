<template>
    <div class="main">
        <span class="main__description">매우 나쁨</span>
    </div>
</template>

<script>
export default {};
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
}
</style>
