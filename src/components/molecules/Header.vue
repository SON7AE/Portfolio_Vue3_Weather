<template>
    <div class="header">
        <div class="header__city">
            <span class="header__city__name">{{ store.sCityName }}, Korea</span>
            <span class="header__city__time">{{ now }} 기준</span>
        </div>
    </div>
</template>

<script>
import * as dayjs from 'dayjs';
import { useStore } from '~/store/index';

export default {
    setup() {
        const now = dayjs().format('YYYY년 MM월 DD일 HH시 mm분');
        const store = useStore();

        return {
            now,
            store,
        };
    },
};
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
