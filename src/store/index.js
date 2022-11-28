import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        sCityName: 'Seoul',
        sWeatherIcon: '01d',
        nCurrentTemp: 0,
        nCurrentHumidity: 0,
        nCurrentWindSpeed: 0,
        nCurrentWindChill: 0,
    }),
    getters: {},
    actions: {},
});
