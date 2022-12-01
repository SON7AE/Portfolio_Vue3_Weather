<template>
    <div class="timely-weather">
        <span class="timely-weather__time">{{ Unix_timeStamp(data.time) }}</span>
        <span class="timely-weather__info">{{ data.value }}hpa</span>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const Unix_timeStamp = (dt) => {
            let date = new Date(dt * 1000);
            let hour = date.getHours().toString().padStart(2, '0');

            return hour.substring(-2) + '시';
        };

        return {
            Unix_timeStamp,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.timely-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 78px;
    min-width: 78px;
    height: 78px;

    gap: 8px;

    background-color: $color-red-100;
    border-radius: 20px;

    color: $color-white-000;
    font-family: 'SUIT-Regular';

    &__time {
        font-weight: 500;
    }
    &__info {
        font-weight: 700;
    }
}
</style>
