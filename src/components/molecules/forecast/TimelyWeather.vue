<template>
    <div class="timely-weather">
        <img :src="`${icon}`" alt="날씨 아이콘" class="timely-weather__image" />
        <div class="timely-weather__info">
            <span class="timely-weather__info__time">{{ Unix_timeStamp(data.time) }}</span>
            <span class="timely-weather__info__temp">{{ data.temp }}&#8451;</span>
            <span class="timely-weather__info__humidity">
                <img src="~/assets/images/drop.png" alt="" class="timely-weather__info__humidity__image" />
                {{ data.humidity }}%
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
    setup() {
        const Unix_timeStamp = (dt) => {
            let date = new Date(dt * 1000);
            let hour = date.getHours().toString().padStart(2, '0');

            return hour.substring(-2) + '시';
        };

        return { Unix_timeStamp };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.timely-weather {
    display: flex;
    align-items: center;

    width: 120px;
    min-width: 120px;
    height: 62px;

    padding: 8px;

    background-color: $color-blue-100;
    border-radius: 20px;

    &__image {
        width: 45%;
    }
    &__info {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 55%;

        gap: 6px;

        color: $color-white-000;
        font-family: 'SUIT-Regular';

        &__time {
        }
        &__temp {
        }
        &__humidity {
            display: flex;
            align-items: center;

            gap: 2px;

            &__image {
                height: 16px;
            }
        }
    }
}
</style>
