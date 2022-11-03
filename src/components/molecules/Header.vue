<template>
    <div class="header">
        <div class="header__city">
            <span class="header__city__name">Seoul, South Korea</span>
            <span class="header__city__time">2022년 11월 4일 금요일 오전 7시 34분</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.header {
    display: flex;
    flex-direction: column;

    gap: 24px;

    &__city {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 8px;

        color: $color-white-000;

        &__name {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 28px;
        }
        &__time {
            font-family: 'SUIT-Regular';
            font-size: 14px;
        }
    }
}
</style>
